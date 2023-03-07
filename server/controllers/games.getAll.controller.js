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


// Esta funcion busca dentro de la primer pagina las coincidencias de los juegos
/*
const gameSearch = (array, namex) => {
    const response = array.filter( (nombre) => {
        if (nombre.name.toLowerCase().includes(namex)){
          return nombre.name
        }

    })
    return response
}
*/

/* Esta funcion es para mapear todas las paginas y hacer un solo array con todos los juegos existentes

ES IMPOSIBLE POR LA CANTIDAD DE TIEMPO QUE TARDA EN EJECUTARSE EL CODIGO

const objeto = async function getGames(obj) {
    let response = await axios(obj.data.next);
    console.log(obj.data.next)
    return response;
}


const busqueda = async ( obj ) => {
    const total = []
    
    while(obj.data.next) {
        total.push(obj.data.results)
       
        obj = await objeto(obj)
       
    }
   res.json(total)
}

*/






module.exports = getGamesAll