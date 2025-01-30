import logo from '../assets/img/prodmast-logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='px-6 lg:px-12 xl:px-16 2xl:px-20 pt-14 pb-10 bg-[#0B0F12] text-sm text-white/85 tracking-wide font-light'>
        <div className='grid grid-cols-6 w-full gap-x-5'>
            <div className='space-y-3 col-span-2'>
                <div className='flex items-center gap-x-4 pb-4'>
                    <img src={logo} alt="logo" className="w-5 lg:w-9" />
                    <p className='text-lg text-white font-semibold lg:text-xl'>Prodmast</p>
                </div>
                <p>Our solutions make production <br /> faster and cheeper. Contact us for <br /> more information.</p>
            </div>
            <div className='space-y-3 pl-10'>
                <h3 className='text-lg font-medium text-white pb-2'>Company</h3>
                <p className='cursor-pointer'>About Us</p>
                <p className='cursor-pointer'>Customers</p>
                <p className='cursor-pointer'>Newsroom</p>
                <p className='cursor-pointer'>Events</p>
            </div>
            <div className='space-y-3'>
                <h3 className='text-lg font-medium text-white pb-2'>Industries</h3>
                <p>Precision Metalforming</p>
                <p>Industrial Manufacturing</p>
                <p>High Tech & electronics</p>
                <p>Aerospace</p>
            </div>
            <div className='space-y-3'>
                <h3 className='text-lg font-medium text-white pb-2'>Products</h3>
                <p>Manufacturing Execution System</p>
                <p>Enterprise Resource Planning</p>
                <p>Quality Management Sysytem</p>
                <p>Supply Chain Planning</p>
            </div>
            <div className='space-y-3 pl-'>
                <h3 className='text-lg font-medium text-white pb-2'>Get In Touch</h3>
                <p>hallo@prodmast.com</p>
                <div className='flex gap-x-3'>
                    <div className='bg-[#272B2E] size-9 flex justify-center items-center rounded-lg hover:bg-[#0077B5]'><FaLinkedin className='size-6 fill-white cursor-pointer' /></div>
                    <div className='bg-[#272B2E] size-9 flex justify-center items-center rounded-lg hover:bg-[#C13584] '><AiFillInstagram className='size-6 fill-white cursor-pointer' /></div>
                    <div className='bg-[#272B2E] size-9 flex justify-center items-center rounded-lg hover:bg-[#1877F2]'><FaFacebookSquare className='size-6 fill-white cursor-pointer' /></div>
                </div>
            </div>
        </div>
        <hr  className='text-gray-700 mt-10 mb-10'/>
        <div className='text-sm text-white/85 tracking-wide font-light flex justify-between'>
            <p>@2025 Prodmast, All rights reserved</p>
            <div className='flex gap-x-6'>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
{/* <FaFacebookSquare /> */}
{/* <AiFillInstagram /> */}
{/* <FaLinkedin /> */}