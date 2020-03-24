const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

const moviesRoutes = require('./routes/movies')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname + '/assets/css'))
app.use(express.static(__dirname + '/assets/js'))
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => res.sendFile("index.html"))

app.use('/api/movies', moviesRoutes)

app.listen(port, () => console.log(`Application listening on port ` + port))

