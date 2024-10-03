import React from 'react'
import { NavLink } from 'react-router-dom'

export const ProjectHomePage = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink to='/api/project'>Home</NavLink></li>
                <li><NavLink to='/api/project/posts'>Posts</NavLink></li>
                <li><NavLink to='/api/project/users'>Users</NavLink></li>
                <li><NavLink to='/api/project/albums'>Albums</NavLink></li>
                
            </ul>
        </nav>
    </div>
  )
}
