import React from 'react'
import { Link } from 'react-router-dom'
// import ReactPaginate from 'react-paginate'



export const Card = ({data}) => {


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
                            <button className='btn btn-outline-light'><Link to={`/game/${item.id}`} className="text-reset text-decoration-none">Ver Mas</Link></button>
                          </div>
                            
                    </div>
                  })
            
            } 
    </>
  )
}
