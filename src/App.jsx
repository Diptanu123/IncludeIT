import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<HomePage/>} />
          <Route path='/contact' element= {<Contact/>} />
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default App