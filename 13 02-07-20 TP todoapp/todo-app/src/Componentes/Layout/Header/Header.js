import React from 'react';
import './Header.css';
import { Link }from 'react-router-dom'

function Header() {
    return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
          <ul className="navbar-nav">
            <li className="nav-item active">
             <Link to="/">Inicio</Link>
            </li>
            <li className="nav-item active">
              <Link to="/create">Crear To Do</Link>
            </li> 
            <li className="nav-item active">
              <Link to="/done">Done</Link>
            </li> 
          </ul>
       
      </nav>
   </header>
    )
}

export default Header
