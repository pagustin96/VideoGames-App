import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



export const Card = (busqueda, pagina) => {

    const[data, setData] = useState([])
    const[api, setApi] = useState('')
    let [page, setPage] = useState(1)
    const game = busqueda.busqueda.busqueda
    const paginado = busqueda.pagina
    console.log(paginado)
    
// Primer renderizado carga los primeros juegos de la pagina 1 de la api    
     useEffect(() => {
      
      const url = 'http://localhost:5000/api';
      
      axios.get(url)
          .then(res => {
            const array = Object.values(res.data)
              setData(array) 
              
              
          })
  }, [])


 // Busqueda de juegos a travez de la api 
  if(api !== game && game !== undefined){
    setApi(game)
    const url = 'http://localhost:5000/api/videogames?game=' + game;
    axios.get(url)
        .then(res => {
          const array = Object.values(res.data)
            setData(array) 
                 
        })
  }

  // Paginacion del home
  if(page !== paginado) {
    setPage(paginado)
    const url = 'http://localhost:5000/api/pages?page=' + page;
    axios.get(url)
    .then(res => {
      const array = Object.values(res.data)
        setData(array) 
             
    })
  }



  const bgCard = {
    backgroundColor : '#151515',
    color: 'white',
    width: '18rem',
    opacity: '0.95'
       
  }



  return (
    <>
            {

                  data.map((item) => {
                    
                    return <div className=' card m-1 bg-card' style={bgCard} key={item.id}>
                            
                            <img src={item.background_image} className="d-flex card-img-top" alt="imagen"/>
                          <div className="card-body text-center ">
                            <h5 className="card-title">{item.name} </h5>
                            <p className="card-text">Rating: {item.rating}</p>
                            <p className="card-text" id='genero'>Genero: {item.genres.map((element) => element.name+' ')}</p>
                            <button className='btn btn-outline-light'><Link to='/#' className="text-reset text-decoration-none">Ver Mas</Link></button>
                          </div>
                            
                    </div>
                  })
            
            } 
    </>
  )
}
