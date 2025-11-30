import React from 'react'
import {Link, useLocation} from 'react-router-dom';

export const Navbar = () => {

    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    }

  return (
    <nav className='navbar'>
        <div className='container'>

        <Link to= "/" className= "nav-brand">
          💳 CreditSmart
        </Link>

        <ul className='nav-menu'>
            <li>
                <Link to= "/" className={isActive('/')}>
                  Inicio
                </Link>
            </li>
            <li>
                <Link to= "/simulador" className={isActive('/simulator')}>
                  Simulador
                </Link>
            </li>
            <li>
                <Link to= "/solicitar" className={isActive('/solicitar')}>
                  Solicitar credito
                </Link>
            </li>
        </ul>

      </div>
        
    </nav>
  )
}
