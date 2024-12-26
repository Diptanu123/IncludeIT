import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import EnrollPage from './pages/EnrollPage';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import GalleryPage from './pages/GalleryPage';
function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<HomePage/>} />
          <Route path='/enroll' element= {<EnrollPage/>} />
          <Route path='/students' element= {<StudentsPage/>} />
          <Route path='/gallery' element= {<GalleryPage/>} />
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default App