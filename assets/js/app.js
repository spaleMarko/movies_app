$(document).ready(function () {
    $.getJSON("/api/movies")
    .then(addMovies);

    $('#addMovie').keypress(function(rvent){
        if(event.which == 13){
            createMovie();
        }
    });

    $('.list').on('click', 'li', function(){
        updateMovie($(this));
    });

    $('.list').on('click', 'span', function(evt){
        evt.stopPropagation();
        removeMovie($(this).parent());
    })
});

function addMovies(movies){
    movies.forEach(function(movie){
        addMovie(movie);
    });
}

function addMovie(movie){
    var newMovie = $('<li class="movie">' + movie.title + '<span>X</span></li>');
    newMovie.data('id', movie._id);
    newMovie.data('watched', movie.watched);
    if(movie.watched){
        newMovie.addClass('watched');
    }
    $('.list').append(newMovie);
}

function createMovie(){
    var movieTitle = $('#addMovie').val();
    $.post('/api/movies', {title:movieTitle})
    .then(function(newMovie){
        $('#addMovie').val('');
        addMovie(newMovie);
    })
    .catch(function(err){
        console.log(err);
    })
}

function updateMovie(movie){
    var url = '/api/movies/' + movie.data('id');
    var isWatched = !movie.data('watched');
    var updateWatched = {watched: isWatched}

    $.ajax({
        method: 'put',
        url: url,
        data: updateWatched
    })
    .then(function(updateMovie){
        movie.toggleClass('watched');
        movie.data('watched', isWatched);
    })
    .catch(function(err){
        console.log(err);
    })
}

function removeMovie(movie){
    var id = movie.data('id');
    var url = '/api/movies/' + id;

    $.ajax({
        method: 'delete',
        url: url
    })
    .then(function(data){
        movie.remove()
    })
    .catch(function(err){
        console.log(err);
    })
}