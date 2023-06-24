const express = require('express')
const app = express()
const port = 3000

const moviesRoute = require('./routes/moviesRoute')

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.use((req,res) => {
    res.header('Accesss-Control-Allow-Origin' ,'*')
})
//localhost:3000/api/movies
app.use('/api', moviesRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})