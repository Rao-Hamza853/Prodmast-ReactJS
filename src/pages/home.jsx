import Benefits from "../components/benefits"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import Services from "../components/services"

const Home = () => {
  return (
    <div className="font-manrope">
     <Navbar/>  
     <Hero/>    
     <Services/>
     <Benefits/>
    </div>
  )
}

export default Home
