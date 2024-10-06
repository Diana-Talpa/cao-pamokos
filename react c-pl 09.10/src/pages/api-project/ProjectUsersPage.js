import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import UsersList from './UsersList'


const ProjectUsersPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/users?_embed=posts')
          .then(res => res.json())
          .then(data => {
              console.log(data)
              setUsers(data)
          })
  }, [])

  return (
      <div>
          <Header />
          <UsersList users={users} />
      </div>
  )
}

export default ProjectUsersPage