import React, { useState, useEffect } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from '../components/Home'
import { Header } from '../components/Header'
import { Info } from '../components/Info'

export const RouterPrincipal = () => {

  const[game, setGame] = useState('') // almaceno la busq
  const[data, setData] = useState([]) // aca almaceno el array de resultados
  const[api, setApi] = useState('') // 
  const[ide, setIde] = useState('')
    
  // Se pasa al componente hijo y se ejecuta desde alli para devolver el string de busqeda y setearlo al estado
  const busquedaParams = (datosHijo) => {
    setGame(datosHijo)
  } 




// Primer renderizado carga los primeros juegos de la pagina 1 de la api    
   useEffect(() => {
    myF()
   /* const url = 'http://localhost:5000/api';
    
    fetch(url)
        .then((response) => response.json())
        .then(res =>  setData(res))*/

       
}, [game])


// Busqueda de juegos a travez de la api
const myF = () => {
  console.log('si entra a F')
  if(api !== game && game !== undefined){
    setApi(game)
    const url = `http://localhost:5000/api/videogames?game=${game}`;
  
    fetch(url)
          .then((response) => response.json())
          .then(res =>  setData(res))
    
  }
} 



  return (
    <BrowserRouter>

        <Header busquedaParams={busquedaParams}/>
       

        <Routes>
            <Route path='/' element={ <Home info={data}/> }/>        
            <Route path='/game/:id' element={ <Info />} />
        </Routes>
    </BrowserRouter>
  )
}
//