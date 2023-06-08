const axios = require ('axios')

 const getGames = async (req, res) => {
    
    let response = await axios(`https://api.rawg.io/api/games/${req.query.id}/game-series?key=c4b1160de0614f658ad33647623a85b0`);
    return response;
}


const getSeries = async (req, res) => {
    console.log('Entro en busqueda')
    let responseGames = await getGames(req, res)
       
        
        const gameDescription = responseGames.data
        res.json(gameDescription)
        
   
}


module.exports = getSeries