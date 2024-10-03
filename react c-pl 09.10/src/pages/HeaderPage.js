import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const HeaderPage = () => {
  return (
    <header>
    <nav>
        <ul>
        <li><NavLink to='/cars'>Cars</NavLink></li>
        <li><NavLink to='/cities'>Cities</NavLink></li>
        <li><NavLink to='/students'>Students</NavLink></li>
        
        </ul>
    </nav>
    </header>
  )
}

export default HeaderPage