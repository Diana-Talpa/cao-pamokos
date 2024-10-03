import { useEffect, useState } from 'react'

const ProjectUsersPage = () => {
  const [users, setUsers] = useState ([])

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  },[])
  return (
    <div>
      <h1>User List</h1>

      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default ProjectUsersPage