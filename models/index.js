const mongoose = require('mongoose')
mongoose.set('debug', true)

const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(){
        console.log("DB Connected")
    })
    .catch(function(err){
        console.log(err)
    })

mongoose.Promise = Promise

module.exports.Movie = require('./movie')