import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import EnrollPage from './pages/EnrollPage';
import HomePage from './pages/HomePage.jsx';
import StudentsPage from './pages/StudentsPage';
import GalleryPage from './pages/GalleryPage';
import ThankYouPage from './pages/ThankYouPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/enroll' element= {<EnrollPage/>} />
          <Route path='/students' element= {<StudentsPage/>} />
          <Route path='/gallery' element= {<GalleryPage/>} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/profile" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default App