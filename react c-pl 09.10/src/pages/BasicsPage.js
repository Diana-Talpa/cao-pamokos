import React from 'react'
import {Link} from 'react-router-dom'

export const BasicsPage = () => {
  return (
    <div> <h1> React Basics </h1>

    <div>
        <h2>Componentas</h2>

        <p>Informacija apie React komponentus</p>
        <Link to='/basics/news'>Read more</Link>
    </div>
    </div>


    
  )
}

export default BasicsPage
