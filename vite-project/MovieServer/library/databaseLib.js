const { ViewModuleSharp } = require('@mui/icons-material')
const moviesData = require('../data/moviesData')
const movies = moviesData.movies

class Database {
    constructor() {
        this.id = Date.now()
    }

#log = (value) => {
    console.log(`[Database: ${this.id}]: ${value}`)
}

movies(){
    this.#log('all');
    return movies;
}}

//add a movie
addMovie(data){
    this.#log(data.title)
    const newId = `${movies.length + 1}` 
    const newMovie = {
        id :newId,
       ...data
    }

    //push the data to our array of
    movies.push(newMovie)
    return movies.length
}
}
    



module.exports = Database;
    