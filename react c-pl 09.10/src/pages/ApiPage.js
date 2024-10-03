import React from 'react'
import { Link } from 'react-router-dom'

export const ApiPage = () => {
  return (
    <div>

        <h1>API</h1>

        <ul>
            <li><Link to='/api/start'>Start</Link></li>
            <li><Link to='/api/project'>Project</Link></li>
        </ul>
    </div>
  )
}
