import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Achievements from '../components/Achievement'
import CoursesSection from '../components/CoursesSection'
import FloatingSection from '../components/FloatingSection'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Achievements/>
        <CoursesSection/>
      <FloatingSection/>
    </div>
  )
}

export default HomePage
