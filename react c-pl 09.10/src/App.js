import './pages/CounterPage.js'
import './App.css';
import NewsPage from './pages/NewsPage';
import { CounterPage } from './pages/CounterPage.js';
import CitiesPage from './pages/CitiesPage.js'
import StudentsPage from './pages/StudentsPage.js';
import CarsPage from './pages/CarsPage.js';
import { Routes, Route } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage.js';


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
{/* 
        <Route path='/basics' element={<BasicsPage />} />
        <Route path='/basics/news' element={<NewsPage />} />
        <Route path='/basics/loops' element={<LoopsInReact />} />

        <Route path='/api' element={<ApiPage />} />
        <Route path='/api/start' element={<ApiStartPage />} />
        <Route path='/api/project' element={<ProjectHomePage />} />

        <Route path='/api/project/posts' element={<ProjectPostsPage />} />
        <Route path='/api/project/posts/:postId' element={<ProjectPostPage />} />

        <Route path='/api/project/users' element={<ProjectUsersPage />} />
        <Route path='/api/project/users/:id' element={<ProjectUserPage />} />

        <Route path='/api/project/albums' element={<ProjectAlbumsPage />} /> */}

        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
    </>
  )
}

export default App
