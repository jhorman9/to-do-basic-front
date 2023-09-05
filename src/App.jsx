import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/CreateTask'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='container'>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/createTask' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
