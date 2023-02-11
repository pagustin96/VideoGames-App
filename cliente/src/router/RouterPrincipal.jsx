import React, { useState } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from '../components/Home'
import { Header } from '../components/Header'

export const RouterPrincipal = () => {

  const [datos, setDatos] = useState('')

  const busquedaParams = (datosHijo) => {
    setDatos(datosHijo)
    console.log('desde router:', datos)
  }

  return (
    <BrowserRouter>

        <Header busquedaParams={busquedaParams}/>
       

        <Routes>
            <Route path='/' element={ <Home busqueda={datos}/> }/>        
        </Routes>
    </BrowserRouter>
  )
}
//