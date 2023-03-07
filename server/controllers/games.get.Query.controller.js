const axios = require ('axios')

 const getGames = async (req, res) => {
    let response = await axios(`https://api.rawg.io/api/games?key=c4b1160de0614f658ad33647623a85b0&search=${req.query.game}`);
    
    return response;
}


const getGamesBusq = async (req, res) => {
    console.log('Entro en busqueda')
    let responseGames = await getGames(req, res)
       
        
        const gameList = responseGames.data.results
        
       
            
            res.json(gameList)
        
   
}


module.exports = getGamesBusq