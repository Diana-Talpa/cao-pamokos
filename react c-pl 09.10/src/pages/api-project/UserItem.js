import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ data }) => {
    const { id, name, posts } = data

    return (
        <li>
            <Link to={`/api/project/users/${id}`}>
                {name} 
                
                {posts && posts.length > 0 && ` (${posts.length})`}
            </Link>
        </li>
    )
}

export default UserItem