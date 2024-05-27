import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home' 
import Detection from './pages/Detection'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detection' element={<Detection/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App
