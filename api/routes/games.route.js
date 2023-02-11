const express = require('express')
const route = express.Router()
const getGamesAll = require('../controllers/games.getAll.controller')

route.get('/', getGamesAll)

//route.get('/genres', some)

//route.post('/', something)

module.exports = route