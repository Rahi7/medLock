import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Project from './pages/Project'
import About from './pages/About';
import Footer from './components/Footer'
import Signin from './pages/SignIn'
import Signup from './pages/SignUp'
import Form from './pages/Form'

const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/project' element={<Project />} />
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/form' element={<Form />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
  )
}

export default App