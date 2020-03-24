const express = require('express')
const router = express.Router()

const helpers = require('../helpers/movies')

router.route('/')
    .get(helpers.getAllMovies)
    .post(helpers.createMovie)

router.route('/:movieId')
    .get(helpers.getMovieById)
    .put(helpers.updateMovie)
    .delete(helpers.deleteMovie)


module.exports = router