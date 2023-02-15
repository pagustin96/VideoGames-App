import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'

export const Header = ({busquedaParams}) => {

  const [busqueda, setBusqueda] = useState('')
  
  const handler = (e) => {
    e.preventDefault()
  }




  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-dark" data-bs-theme='dark'>
    <div className="container-fluid">
      <NavLink className="navbar-brand" href="">VideoGames-App</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to='/' onClick={()=> busquedaParams('')}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#">Link</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </NavLink>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="#">Action</Link></li>
              <li><Link className="dropdown-item" href="#">Another action</Link></li>
              <li><div className="dropdown-divider"></div></li>
              <li><Link className="dropdown-item" href="#">Something else here</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link disabled">Disabled</NavLink>
          </li>
        </ul>
        <form className="d-flex" onSubmit={ handler }>
          <input className="form-control me-2" type="text" placeholder="Buscar" id='buscar' value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)}    />
          <button className="btn btn-outline-success" type="submit" onClick={() => busquedaParams(busqueda)}>Buscar</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
