import React, {useState, useEffect} from 'react'
import { Card } from './Card'
import './css/home.css'


export const Home = ({info}) => {
  const [flag, setFlag] = useState ([]);
  let [page, setPage] = useState(1);
  const [data, setData] = useState([]);


  const handleResetPage = () => {
    setPage(1);
  };

  useEffect(() => {

    if(info.length > 0 && info !== flag) {
      setFlag(info)
      setData(info)
      handleResetPage()
    } else if(info.length === 0 && page === 1) {

      const url = `http://localhost:5000/api/pages?page=${page}`;
    
      fetch(url)
          .then((response) => response.json())
          .then(res =>  setData(res))
  
    } else if (info.length > 0 && page === 1){
      return
    } else{
      const url = `http://localhost:5000/api/pages?page=${page}`;
    
      fetch(url)
          .then((response) => response.json())
          .then(res =>  setData(res))
    }
    

       
}, [page, info])

  return (
    <div className='home-container'>
       
      <h1 className='mt-5'>Nuevos Lanzamientos</h1>
      <h2 className=''>Descubri lo ultimo en videojuegos</h2>


      <section className='card-container'><Card data={data}/></section>
                   
      
      <section>
          
          <button onClick={() => setPage(prevPage => prevPage - 1)}>Prev</button>{page}<button onClick={() => setPage(prevPage => prevPage + 1)}>Next</button>
        </section>
</div>
   
    
  )
}
