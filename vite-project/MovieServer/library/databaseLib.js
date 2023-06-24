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

module.exports = Database;
    