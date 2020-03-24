const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        requireed: 'Title must not be empty'
    },
    genre: {
        type: String,
        default: 'Action and Adventure'
    },
    watched: {
        type: Boolean,
        default: false
    },
    added_date: {
        type: Date,
        default: Date.now()
    }
})

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie