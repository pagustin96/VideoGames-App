import React, {useEffect, useState} from 'react'

export const Info = () => {
    
    const [data, setData] = useState('')

    const pathname = window.location.pathname;
    let id = pathname.match(/\d+/g).map(Number);
    id = id.toString()
    

    useEffect(() => {
    
        const url = `http://localhost:5000/api/game?id=${id}`;
        
        fetch(url)
            .then((response) => response.json())
            .then(res =>  setData(res))
    }, [])
    //console.log(data.name)
  return (
    <div className='mt-5'>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <img src={data.background_image_additional} alt='imgen' className="d-flex card-img-top"/>
    </div>
    
  )
}
