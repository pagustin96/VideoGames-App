const express = require('express')
const route = express.Router()
const getGamesAll = require('../controllers/games.getAll.controller')
const getGamesBusq = require('../controllers/games.get.Query.controller')
const getPage = require('../controllers/games.get.pages')
const getOnlyGame = require('../controllers/games.get.OnlyGame')
const getTrailer = require('../controllers/games.get.trailer')
const getScreenshots = require('../controllers/games.get.screenshots')
const getSeries = require('../controllers/games.get.series')

route.get('/', getGamesAll)

route.get('/videogames', getGamesBusq)

route.get('/pages', getPage)

route.get('/game', getOnlyGame)

route.get('/game/trailer', getTrailer)

route.get('/game/series', getSeries)

route.get('/game/screenshots', getScreenshots)

module.exports = route