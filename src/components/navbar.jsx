import { Link } from 'react-router'
import logo from '../assets/img/prodmast-logo.png'
import SignUpBtn from './ui/signp-btn'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
   
  return (
    <nav className='flex items-center justify-between h-20 px-8 lg:px-14 xl:px-20 bg-[#F8FAFB]'>
      <div className='flex items-center gap-2 lg:gap-4'>
        <Link to="/"><img src={logo} alt="logo" className="w-5 lg:w-9" /></Link>
        <p className='text-lg font-semibold opacity-80 lg:text-xl'>Prodmast</p>
      </div>
      <ul className="hidden md:flex gap-x-3 lg:gap-x-8">
          <li>
            <a className="li-style" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="li-style" href="#solutions">
              About
            </a>
          </li>
          <li>
            <a className="li-style" href="#pricing">
              Services
            </a>
          </li>
          <li>
            <a className="li-style" href="#footer">
              Contact
            </a>
          </li>
        </ul>
        <SignUpBtn title="Sign Up"/>
        <FaBars className="md:hidden lg:hidden xl:hidden"/>
    </nav>
  )
}

export default Navbar