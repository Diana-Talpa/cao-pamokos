import {useEffect, useState} from 'react'
import Header from './Header'

const ProjectPostsPage = () => {
  const [posts, setPosts] = useState ([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <Header/>
      <h1>Posts  List</h1>

<ul>
  {posts.map(post => <li key={post.id}>{post.tittle}</li>)}
</ul>
</div>
  )
}

export default ProjectPostsPage