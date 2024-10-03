import { useEffect, useState } from 'react'

export const ApiStartPage = () => {
    const [joke, setJoke] = useState('loading...')

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => setJoke(data.value))
    }, [])
  
    const randomJokeHandler = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => setJoke(data.value))
    }
  return (
    <div>
        <p>{joke}</p>
        <button onClick={randomJokeHandler}> Get Random Joke</button>
    </div>
  )
}

export default ApiStartPage