import { Link } from 'react-router'
import logo from '../assets/img/prodmast-logo.png'
import SignUpBtn from './ui/signp-btn'
import { FaBars } from "react-icons/fa6";
import { useRef, useState } from 'react';
import Sidebar from './sidebar';
import { useOnClickOutside } from '../hooks/use-on-click-outside';

const Navbar = () => {
  const menuRef = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false)
  useOnClickOutside(menuRef, () => setToggleMenu(false));
  return (
    <nav className='flex items-center justify-between h-16 px-6 lg:px-12 xl:px-16 2xl:px-20  bg-[#F8FAFB]'>
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
            <a className="li-style" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="li-style" href="#services ">
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
        <FaBars className="md:hidden lg:hidden xl:hidden" onClick={() => setToggleMenu(true)}/>
        {toggleMenu ? (
        <div 
        ref={menuRef}
        className="fixed w-full z-40">
          <Sidebar/>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar