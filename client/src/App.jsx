import Navbar from './components/NavBar'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import React from 'react';
import Auth from './components/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Auth />
    </BrowserRouter>
  )
}

export default App
