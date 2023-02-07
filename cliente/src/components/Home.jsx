import React, {useEffect, useState} from 'react'
import { NavLink} from 'react-router-dom'
import axios from 'axios'

export const Home = () => {

    const[data, setData] = useState([]) 

    useEffect(() => {
      let url = 'http://localhost:5000/api'
      axios.get(url)
          .then(res => {
            const array = Object.values(res.data)
              setData(array) 
              console.log(array)
              
          })
  }, [])



  return (

    <div className='container'>
          <h2 className='text-center'>Nuevos Lanzamientos</h2>
  
          <div className='row mt-4' >
      
      {
            data.map((item) => {
                return <div className='col-3 card m-1' style={{width: '18rem;'}} key={item.id}>
                        <img src={item.background_image} className="card-img-top" alt="imagen"/>
                      <div className="card-body">
                        <h5 class="card-title">{item.name} </h5>
                        <p class="card-text">{item.rating}</p>
                        <p class="card-text">{item.playtime}</p>
                        <NavLink to='/#' class="btn btn-primary">Editar</NavLink>
                      </div>
                        
                </div>
            })
           }      
    

      </div>

    </div>
  )
}
