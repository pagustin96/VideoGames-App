const axios = require ('axios')

const getGames = async () => {
    let response = await axios('https://api.rawg.io/api/games?key=c4b1160de0614f658ad33647623a85b0');
    return response;
}


const getGamesAll = async (req, res) => {
    let responseGames = await getGames()
       
        const game = req.query.game
        const gameList = responseGames.data.results

        if(game){
            const newRes = gameSearch(gameList, game)
            console.log(typeof newRes)
            res.json(newRes)
        } else {
            res.json(gameList)
        }
   
}

const gameSearch = (array, namex) => {
    const response = array.filter( (nombre) => {
        if (nombre.name.toLowerCase().includes(namex)){
          return nombre.name
        }

    })
    return response
}



module.exports = getGamesAll