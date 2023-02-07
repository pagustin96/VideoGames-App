import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from '../components/Home'
import { NavBar } from '../components/NavBar'
import { Header } from '../components/Header'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

        <Header/>
        <NavBar/>

        <Routes>
            <Route path='/' element={ <Home/> }/>        
        </Routes>
    </BrowserRouter>
  )
}
