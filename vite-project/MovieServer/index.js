const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const moviesRoute = require('./routes/moviesRoute')

app.use(cors())

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.use('/api', moviesRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})