const express = require('express')
const route = express.Router()
const getGamesAll = require('../controllers/games.getAll.controller')
const getGamesBusq = require('../controllers/games.get.Query.controller')
const getPage = require('../controllers/games.get.pages')
const getOnlyGame = require('../controllers/games.get.OnlyGame')

route.get('/', getGamesAll)

route.get('/videogames', getGamesBusq)

route.get('/pages', getPage)

route.get('/game', getOnlyGame)

module.exports = route