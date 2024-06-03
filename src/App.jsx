import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Skills from './pages/Skills'
import Reviews from './pages/Reviews'
import Projects from './pages/Projects'
import Email from '../src/pages/Email'
import Location from './components/Location'

function App() {


  return (
    <>
    <BrowserRouter>
<Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/Skills' element={<Skills/>}></Route>
<Route path='/projects' element={<Projects/>}></Route>
<Route path='/Reviews' element={<Reviews/>}></Route>
<Route path='/Email' element={<Email/>}></Route>
<Route path='/Location' element={<Location/>}></Route>



 </Routes>
 
 </BrowserRouter>  
    </>
  )
}

export default App
