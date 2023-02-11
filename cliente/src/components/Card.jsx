import React, {useEffect, useState} from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'



export const Card = (busqueda) => {

    const[data, setData] = useState([])
    const[api, setApi] = useState('')
    const game = busqueda.busqueda.busqueda
    
    if(api !== game){
      setApi(game)
      console.log('desde api: ',game)
      const url = 'http://localhost:5000/api?game=' + game;
      axios.get(url)
          .then(res => {
            const array = Object.values(res.data)
              setData(array) 
              console.log('desde useefect', api)
              
          })
    }
    useEffect(() => {
      
      const url = 'http://localhost:5000/api?game='
      axios.get(url)
          .then(res => {
            const array = Object.values(res.data)
              setData(array) 
              
              
          })
  }, [])

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
                        <p className="card-text">Genero: {item.genres[0].name}</p>
                        <button className='btn btn-outline-light'><Link to='/#' class="text-reset text-decoration-none">Ver Mas</Link></button>
                      </div>
                        
                </div>
            })
           }
    </>
  )
}
