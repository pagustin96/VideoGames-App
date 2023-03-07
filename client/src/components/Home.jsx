import React, { useState, useEffect } from 'react'
import { Card } from './Card'

export const Home = ({data}) => {


  

  
  const bgContainer = {
    backgroundSize: '100% ',
    backgroundPosition: 'center top',
    
   }

  return (
    <div className='text-center text-white bg-dark min-vh-100 min-vw-100' style={bgContainer}>
       
      <h1 className='mt-5'>Nuevos Lanzamientos</h1>
      <h2 className=''>Descubri lo ultimo en videojuegos</h2>

      <div className='d-flex justify-content-center mt-4'>
      <section className='row d-flex justify-content-center'><Card data={data}/></section>
                   
      </div>
   
</div>
   
    
  )
}
