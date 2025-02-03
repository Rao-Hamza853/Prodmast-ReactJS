import logo from '../assets/img/prodmast-logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='px-6 lg:px-12 xl:px-16 2xl:px-20 pt-8 md:pt-14 pb-10 bg-[#0B0F12] text-sm text-white/85 tracking-wide font-light' id='footer'>
        <div className='grid grid-cols-1 md:grid-cols-6 w-full gap-x-5'>
            <div className='md:space-y-3 col-span-2 pb-8 md:pb-0'>
                <div className='flex items-center gap-x-4 pb-4'>
                    <a href="#navbar"><img src={logo} alt="logo" className="w-5 lg:w-9  cursor-pointer" /></a>
                    <a href="#navbar"><p className='text-lg text-white font-semibold lg:text-xl  cursor-pointer un'>Prodmast</p></a>
                </div>
                <p className=''>Our solutions make production <br /> faster and cheeper. Contact us for <br /> more information.</p>
            </div>
            <div className='space-y-3 pl-0 md:pl-0 lg:pl-3 xl:pl-14 pb-8'>
                <h3 className='text-lg font-medium text-white pb-2'>Company</h3>
                <p className='cursor-pointer hover:underline'>About Us</p>
                <p className='cursor-pointer hover:underline'>Customers</p>
                <p className='cursor-pointer hover:underline'>Newsroom</p>
                <p className='cursor-pointer hover:underline'>Events</p>
            </div>
            <div className='space-y-3'>
                <h3 className='text-lg font-medium text-white pb-2'>Industries</h3>
                <p className='cursor-pointer hover:underline'>Precision Metalforming</p>
                <p className='cursor-pointer hover:underline'>Industrial Manufacturing</p>
                <p className='cursor-pointer hover:underline'>High Tech & electronics</p>
                <p className='cursor-pointer hover:underline'>Aerospace</p>
            </div>
            <div className='space-y-3'>
                <h3 className='text-lg font-medium text-white pb-2'>Products</h3>
                <p className='cursor-pointer hover:underline'>Manufacturing Execution System</p>
                <p className='cursor-pointer hover:underline'>Enterprise Resource Planning</p>
                <p className='cursor-pointer hover:underline'>Quality Management Sysytem</p>
                <p className='cursor-pointer hover:underline'>Supply Chain Planning</p>
            </div>
            <div className='space-y-3 xl:pl-10 2xl:pl-20'>
                <h3 className='text-lg font-medium text-white pb-2'>Get In Touch</h3>
                <p className='cursor-pointer hover:underline'>hallo<br className='lg:hidden'/>@prodmast.com</p>
                <div className='flex gap-x-3'>
                    <div className='bg-[#272B2E] w-12 h-8 lg:size-9 flex justify-center items-center rounded-lg hover:bg-[#0077B5]'><FaLinkedin className='size-5 lg:size-6 fill-white cursor-pointer' /></div>
                    <div className='bg-[#272B2E] w-12 h-8 lg:size-9 flex justify-center items-center rounded-lg hover:bg-[#C13584] '><AiFillInstagram className='size-5 lg:size-6 fill-white cursor-pointer' /></div>
                    <div className='bg-[#272B2E] w-12 h-8 lg:size-9 flex justify-center items-center rounded-lg hover:bg-[#1877F2]'><FaFacebookSquare className='size-5 lg:size-6 fill-white cursor-pointer' /></div>
                </div>
            </div>
        </div>
        <hr  className='text-gray-700 mt-10 mb-10'/>
        <div className='text-sm text-white/85 tracking-wide font-light flex flex-col gap-y-3 md:flex-row md:justify-between'>
            <p className='text-xs md:text-sm text-center md:text-start'>@2025 Prodmast, All rights reserved</p>
            <div className='flex gap-x-2 md:gap-x-6 justify-center md:justify-start'>
                <p className='text-xs md:text-sm border-r md:border-0 pr-2 md:pr-0'>Terms & Conditions</p>
                <p className='text-xs md:text-sm'>Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
