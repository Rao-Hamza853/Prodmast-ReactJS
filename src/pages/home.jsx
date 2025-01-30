import Benefits from "../components/benefits"
import CirclePrac from "../components/circle-prac"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Idea from "../components/idea"
import Integrations from "../components/integrations"
import Navbar from "../components/navbar"
import Plans from "../components/plans"
import Services from "../components/services"
import CircularMenu from "../components/V0dev"

const Home = () => {
  return (
    <div className="font-manrope">
     <Navbar/>  
     <Hero/>    
     <Services/>
     <Benefits/>
     <Plans/>
     <Integrations/>
     {/* <Idea/> */}
     {/* <Footer/> */}
     {/* <CirclePrac/> */}
     {/* <CircularMenu/> */}
    </div>
  )
}

export default Home
