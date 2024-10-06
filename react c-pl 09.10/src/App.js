import './pages/CounterPage.js'
import './App.css';
import NewsPage from './pages/NewsPage';
import { CounterPage } from './pages/CounterPage.js';
import CitiesPage from './pages/CitiesPage.js'
import StudentsPage from './pages/StudentsPage.js';
import CarsPage from './pages/CarsPage.js';
import { Routes, Route } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage.js';
import BasicsPage from './pages/BasicsPage.js';
import { ApiPage } from './pages/ApiPage.js';
import { NotFoundPage } from './pages/NotFoundPage.js';
import ApiStartPage from './pages/ApiStartPage.js';
import { ProjectHomePage } from './pages/api-project/ProjectHomePage.js';
import ProjectPostsPage from './pages/api-project/ProjectPostsPage.js';
import ProjectsAlbumsPage from './pages/api-project/ProjectAlbumsPage.js';
import ProjectUsersPage from './pages/api-project/ProjectUsersPage.js'


function App() {
  return (
    <>
      <HeaderPage />

      <Routes>
        {/* <Route path='/' element={<h1>Home Page</h1>} /> */}
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/cities' element={<CitiesPage />} />
        {/* <Route path='/todo' element={<TodoPage />} /> */}
        <Route path='/students' element={<StudentsPage />} />
        {/* <Route path='/forms' element={<FormsPage />} /> */}
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/basics/news' element={<NewsPage />} />
        <Route path='/basics' element={<BasicsPage/>} />
        <Route path='/api' element={<ApiPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
        <Route path='/basics' element={<BasicsPage />} />

        <Route path='/api/start' element={<ApiStartPage />} />
        <Route path='/api/project' element={<ProjectHomePage />} />

        <Route path='/api/project/posts' element={<ProjectPostsPage />} />
        {/* <Route path='/api/project/posts/:postId' element={<ProjectPostPage />} /> */}

        <Route path='/api/project/users' element={<ProjectUsersPage />} />
        <Route path='/api/project/users/:id' element={<ProjectUsersPage />} />

        <Route path='/api/project/albums' element={<ProjectsAlbumsPage />} /> 

         
      </Routes>
    </>
  )
}

export default App
