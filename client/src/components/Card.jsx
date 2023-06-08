import React from 'react'
import { Link } from 'react-router-dom'
import './css/card.css'
// import ReactPaginate from 'react-paginate'



export const Card = ({data}) => {


  return (
    <>
            {Array.isArray(data) ?

                  data.map((item) => {
                    
                    return <div className='card'  key={item.id}>
                            
                          <img src={item.background_image} className="card-image" alt="imagen"/>
                          <div className="card-body text-center ">
                            <h5 className="card-title">{item.name} </h5>
                            <p className="card-text">Rating: {item.rating}</p>
                            <p className="card-text" id='genero'>Genero: {item.genres.map((element) => element.name+' ')}</p>
                            <button className='btn btn-outline-light'><Link to={`/game/${item.id}`} className="text-reset text-decoration-none">Ver Mas</Link></button>
                          </div>
                            
                    </div> 
                  }) : <p>No data available</p>
            
            } 
    </>
  )
}
