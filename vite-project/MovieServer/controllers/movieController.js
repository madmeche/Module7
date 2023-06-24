const Database = require('../library/databaseLib')

const db = new Database()

const getMovies = (req, res) => {
    const data = db.movies()
    res.status(200).json({result: data})
}

module.exports = {
    getMovies

}