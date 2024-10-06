import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export const LoadingSpinner = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <RotatingLines strokeColor='#ff00ff' />
    </div>
  )
}

export default LoadingSpinner