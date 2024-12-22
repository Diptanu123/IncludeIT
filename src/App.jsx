import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Achievements from './components/Achievement';
import About from './components/About';
function App() {
  return (
   <Router>
       <Navbar/>
       <HeroSection/>
       <Achievements/>
       <About/>
   </Router>
  )
}

export default App