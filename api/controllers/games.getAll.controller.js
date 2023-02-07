const axios = require ('axios')

const getGames = async () => {
    let response = await axios('https://api.rawg.io/api/games?key=c4b1160de0614f658ad33647623a85b0');
    return response;
}

const getGamesAll = async (req, res) => {
    let responseGames = await getGames()

    res.json(responseGames.data.results)

}

module.exports = getGamesAll