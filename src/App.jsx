import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Achievements from './components/Achievement';
import About from './components/About';
function App() {
  return (
   <Router>
       <Header/>
       <HeroSection/>
       <Achievements/>
       <About/>
   </Router>
  )
}

export default App