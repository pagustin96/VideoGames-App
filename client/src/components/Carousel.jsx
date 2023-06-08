import React from 'react'




export const Carousel = ({screenshots}) => {
  
 
  return (



    
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <>
    {Array.isArray(screenshots) ?
         screenshots.map((item) => {
          
            return <div className="carousel-item active"  data-bs-interval="2500" key={item.id}>
            <img src={item.image} className="d-block w-100" alt={item.id}/>
            </div>
           
       }) : <p>No screenshots available</p>
    }
    </>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  
  )
}


