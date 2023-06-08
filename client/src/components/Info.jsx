import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import styles from './css/info.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from './Carousel'
import { Card } from './Card'

export const Info = () => {
    
    const [data, setData] = useState('')
    const [trailer, setTrailer] = useState('')
    const [isPlaying, setIsPlaying] = useState(false);
    const [screenshots, setScreenshots] = useState([])
    const [series, setSeries] = useState([])
    const [ide, setIde] = useState('')
 


    const pathname = window.location.pathname;
    let id = pathname.match(/\d+/g).map(Number);
    id = id.toString()
   
    
    useEffect(() => {
    
        const urlScreenchots = `http://localhost:5000/api/game/screenshots?id=${id}`
        const urlData = `http://localhost:5000/api/game?id=${id}`
        const urlDataTrailer = `http://localhost:5000/api/game/trailer?id=${id}`
        const urlSeries =  `http://localhost:5000/api/game/series?id=${id}`
        fetchData(urlData)
        fetchDataTrailer(urlDataTrailer)
        fetchScreenshots(urlScreenchots)
        fetchSeries(urlSeries)
       
    }, [])


    const fetchData = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then(res =>  setData(res))
    }

    const fetchDataTrailer = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then(res =>  setTrailer(res.results[0].data.max))
    }

    const fetchScreenshots = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then(res =>  setScreenshots(res.results))
            
    }

    const fetchSeries = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then(res =>  setSeries(res.results))
            
    }


console.log(series)
console.log(trailer)

    
  return (
    <div className= {styles.infoContainer} >
        <div className={styles.innerContainer} >
                <h1>{data.name}</h1>
                <div dangerouslySetInnerHTML={{__html: data.description}}></div>
                <section className=''><Carousel screenshots={screenshots} /></section>
                
              { /* {trailer && (
                    <div className='video-container'>
                        <ReactPlayer url={trailer} playing={isPlaying}/>
                        <div className='buttons-container'>
                            <button className='play-button' onClick={() => setIsPlaying(true)}>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                            <button className='pause-button' onClick={() => setIsPlaying(false)}>
                                <FontAwesomeIcon icon={faPause} />
                            </button>
                        </div>
                    </div>
              )}*/}

              
        </div>

        <section className={styles.relatedContainer}> <h3 className=''>Juegos relacionados</h3> <Card data={series} /></section>
        
    </div>
    
  )
}
