const express = require('express')
const router = express.Router()

const moviesController = require('../controllers/movieController')
const { movies } = require('../data/moviesData')

router.get('/movies', (req,res) => {
moviesController.getMovies(req,res)
})

router.post('/addMovie', (req, res) => {
    moviesController.addMovie(req,res)
})

module.exports = router;