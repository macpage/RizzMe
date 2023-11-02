import { useState } from 'react'

import './App.css'
import { Router,BrowserRouter,Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage'
import SwipePage from './pages/SwipePage'
import AccountPage from './pages/AccountPage'
import LikePage from './pages/LikePage'
import Matches from './pages/Matches'
import { QueryClient, QueryClientProvider } from 'react-query';
function App() {
  const queryClient = new QueryClient();
  const [data,setData] = useState();
  function getData(d){
  console.log("lol" + d)
  setData(d);
  }

  return (
    <div id='app'>
     
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
     <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<LoginPage sendData={getData}></LoginPage>}></Route>
        <Route path='/RegisterPage' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/SwipePage' element={<SwipePage username={data}></SwipePage>}></Route>
        <Route path='/LikePage' element={<LikePage username={data}></LikePage>}></Route>
        <Route path='/AccountPage' element={<AccountPage username={data}></AccountPage>}></Route>
        <Route path='/Matches' element={<Matches></Matches>}></Route>
      </Routes>
  <Footer></Footer>
  </QueryClientProvider>

    </BrowserRouter>
  
    </div>
  )
}

export default App
