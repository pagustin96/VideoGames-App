import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const Home = (busqueda) => {

  const [params, setParams] = useState('');
  let [page, setPage] = useState(1);
  

  useEffect(() => {
    setParams(busqueda)
  })
  
  const bgContainer = {
    backgroundSize: '100% ',
    backgroundPosition: 'center top',
    
   }

  return (
    <div className='text-center text-white bg-dark min-vh-100 min-vw-100' style={bgContainer}>
       
      <h1 className='mt-5'>Nuevos Lanzamientos</h1>
      <h2 className=''>Descubri lo ultimo en videojuegos</h2>

      <div className='d-flex justify-content-center mt-4'>
      <section className='row d-flex justify-content-center'><Card busqueda={params} pagina={ page }/></section>
                   
      </div>
    <form className='row d-flex align-items-center mt-3'>
    <button type="submit" className="btn btn-outline-light col-4"  onClick={() => setPage(page--) }>Anterior</button>
    <p className='col-4'>Pagina { page }</p>
    <button type="button" className="btn btn-outline-light col-4" onClick={() => setPage(page++) }>Siguiente</button>
    </form>
</div>
   
    
  )
}
