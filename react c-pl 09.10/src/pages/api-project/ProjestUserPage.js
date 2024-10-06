import React, { useEffect, useState } from 'react'
import Header from '../../components/apiProject/Header'
import { Link, useParams } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner'

const ProjectUserPage = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})

    const { name, username, phone, email, posts, albums } = data

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}?_embed=posts&_embed=albums`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }, [id])

    return (
        <div>
            <Header />

            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <main>
                    <h1>{name} ({username})</h1>
                    <ul>
                        <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li>
                        <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
                    </ul>
                </main>
            )}

            {posts && (
                <div className='user-posts-wrapper'>
                    <h2>{name} posts:</h2>

                    <ul>
                        {posts.map(post => {
                            const { id, title } = post
                            
                            return (
                                <li key={id}>
                                    <Link to={`/api/project/posts/${id}`}>{title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}

            {albums && (
                <div className='user-albums-wrapper'>
                    <h2>{name} albums:</h2>

                    <ul>
                        {albums.map(album => {
                            const { id, title } = album
                            
                            return (
                                <li key={id}>
                                    <Link to={`/api/project/albums/${id}`}>{title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ProjectUserPage