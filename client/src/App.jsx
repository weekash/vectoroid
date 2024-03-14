import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
      <BrowserRouter>
       <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
