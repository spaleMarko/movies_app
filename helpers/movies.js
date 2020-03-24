const db = require('../models')

exports.getAllMovies = function(req, res){
    db.Movie.find()
    .then(function(movies){
        res.json(movies);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createMovie = function(req, res){
    db.Movie.create(req.body)
    .then(function(newMovie){
        res.status(201).json(newMovie)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getMovieById = function(req, res){
    db.Movie.findById(req.params.movieId)
    .then(function(foundMovie){
        res.json(foundMovie)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateMovie = function(req, res){
    db.Movie.findOneAndUpdate({_id: req.params.movieId}, req.body, {new:true})
    .then(function(movie){
        res.json(movie)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteMovie = function(req, res){
    db.Movie.remove({_id: req.params.movieId})
    .then(function(){
        res.json({message: "Movie is deleted"})
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports