import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const HeaderPage = () => {
  return (
    <header>
    <nav>
        <ul className='menu-list'>
            
        <li><NavLink to='/api'>API</NavLink></li>
        <li><NavLink to='/cars'>Cars</NavLink></li>
        <li><NavLink to='/cities'>Cities</NavLink></li>
        <li><NavLink to='/students'>Students</NavLink></li>
        <li>
            <NavLink to='/basics/'>Basics</NavLink>
            <ul className='sub-menu'>
                <li><NavLink to='basics/news'>News</NavLink></li>

            </ul>
            </li>

        

        
        </ul>
    </nav>
    </header>
  )
}

export default HeaderPage