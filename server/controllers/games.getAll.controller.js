const axios = require ('axios')

let page = 1 ;

 const getGames = async (req, res) => {
    let response = await axios('https://api.rawg.io/api/games?key=c4b1160de0614f658ad33647623a85b0');
    return response;
}


const getGamesAll = async (req, res) => {
    console.log('entro en get all')
    let responseGames = await getGames()
       
        // const game = req.query.game
        const gameList = responseGames.data.results
        
        res.json(gameList)
   
}






module.exports = getGamesAll