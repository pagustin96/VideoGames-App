const express = require('express')
const getGamesAll = require('./routes/games.route')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json());

app.use('/api', getGamesAll)


const PORT = 5000
app.listen(PORT, () => console.log("server on port 5000"))