import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div>
        <h1>404: Page Not Found</h1>
        <Link to='/'>Go back to home page</Link>
    </div>
  )
}
