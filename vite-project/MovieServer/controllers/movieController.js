const Database = require('../library/databaseLib')

const db = new Database()

const getMovies = (req, res) => {
    const data = db.movies()
    res.status(200).json({result: data})
}

const addMovie = (req, res) => {
    const data = req.body
    console.log('Add movie', req.body)

    if(data.title && data.synopsis && data.image){
        const result = db.addMovie(data)
        res.status(201).json({result: "Movie added!", databaseLength: result})
    }else {
        console.log("Error! Invalid post data")
        
    } 
    }
}

module.exports = {
    getMovies

}