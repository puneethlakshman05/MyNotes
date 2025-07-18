
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Archive } from './pages/Archive'
import { Removed } from './pages/Removed'
import { Important } from './pages/Important'
import { Footer } from './components/Footer'


function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/archive' element={<Archive/>}/>
    <Route path='/bin' element={<Removed />}/>
    <Route path='/important'element={<Important />}/>
   </Routes>

    <Footer/>

   </>

  )
}

export default App
