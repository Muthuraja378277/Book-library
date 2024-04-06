import { useState } from 'react'
import Signup from './signup.jsx'
import Login from './login.jsx'
import Home from './Home.jsx'
import Addbook from './Addbook.jsx'
import Seebook from './Seebook.jsx'

import axios from 'axios';

import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";



function App() {

  return (
    <>
        <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Addbook' element={<Addbook/>} />
        <Route path='/Seebook' element={<Seebook/>} />



       </Routes>

    </>
  )
}

export default App
