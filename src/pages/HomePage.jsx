import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Achievements from '../components/Achievement'
import CoursesSection from '../components/CoursesSection'
import FloatingSection from '../components/FloatingSection'
import Contact from '../components/contact'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Achievements/>
        <CoursesSection/>
        <Contact/>
      <FloatingSection/>
      <Footer/>
      
    </div>
  )
}

export default HomePage
