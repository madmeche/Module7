const express = require('express')
const router = express.Router()

const moviesController = require('../controllers/movieController')

router.get('/movies', (req,res) => {
moviesController.getMovies(req,res)
})

module.exports = router;