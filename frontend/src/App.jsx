import { useState } from 'react'

import './App.css'
import { Router,BrowserRouter,Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage'
import SwipePage from './pages/SwipePage'

function App() {
 

  return (
    <div id='app'>
      <Navbar></Navbar>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/RegisterPage' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/SwipePage' element={<SwipePage></SwipePage>}></Route>
      </Routes>
 
    </BrowserRouter>
   <Footer></Footer>
    </div>
  )
}

export default App
