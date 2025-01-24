import React from 'react'
import SignUpBtn from './ui/signp-btn'
import TryDemoBtn from './ui/trydemo-btn'
import { BsStars } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoStatsChart } from "react-icons/io5";
import { LuWaves } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import industry from '../assets/img/industry.png'
import { BsSpeedometer2 } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='space-y-6 px-8 lg:px-14 xl:px-20 bg-[#F5F7F9] pt-14 pb-44'>
      <h1 className='text-6xl font-bold text-center text-success leading-[4.5rem]'>The Future of Manufacturing <br /> with <span className='text-primary'>Latest Technology</span></h1>
      <div className='flex justify-between'>
        <div className='flex flex-col w-24'>
          <div className='flex justify-end '><HiOutlineSparkles className='size-9 bg-primary text-[#F5F7F9] p-1.5 rounded-full'/></div>
          <div className='flex '><CgArrowTopRight className='size-11 text-primary border border-primary p-1.5 rounded-full'/></div>
          <div className='flex justify-end '><FaRegFileAlt className='size-8 text-primary bg-secondary p-1.5 rounded-full'/></div>
        </div>
        <div className='flex flex-col gap-y-5'>
          <p className='text-success text-center pb-4'>Expert tech to elevate your manufacturing. Let's take your bussiness further.</p>
          <div className='flex gap-x-3 justify-center'>
            <SignUpBtn title="Get Started"/>
            <TryDemoBtn/>
          </div>
        </div>
        <div className='flex flex-col w-24'>
          <div className='flex '><BsStars className='size-8 bg-primary text-[#F5F7F9] p-1.5 rounded-full invisible'/></div>
          <div className='flex justify-end'><IoStatsChart className='size-7 text-success bg-secondary p-1 rounded-full opacity-75'/></div>
          <div className='flex '><LuWaves className='size-12 text-primary border border-primary p-2.5 rounded-full'/></div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-x-1 '>
          <FaStar  className='text-amber-400'/>
          <FaStar  className='text-amber-400'/>
          <FaStar  className='text-amber-400'/>
          <FaStar  className='text-amber-400'/>
          <FaStar  className='text-amber-400'/>
          <p className='text-success font-semibold pl-1.5'>5.0</p>
        </div>
        <p className='text-gray-500 text-sm '>from 80+ <span className='font-bold text-black opacity-70'>reviews</span></p>
      </div>

      <div className='grid grid-cols-5 items-end'>
        <div className='h-[90%]'>
          <img src={industry} alt="industry-img" className='object-cover h-full w-full rounded-3xl'/>
        </div>
        <div className='bg-[#153F45] h-[70%] mx-8 rounded-3xl flex justify-center items-center text-center'>
          <p className='text-gray-300'><span className='text-4xl font-bold inline-block pb-1 text-white'>100+</span> <br /> Our Esteemed <br />Clients and <br />Partners</p>
        </div>
        <div className='bg-white h-[55%] rounded-3xl p-8'>
          <div>
            <BsGrid1X2 className='bg-secondary size-9 p-2.5 rounded-lg'/>
            <div>
              <p>Total Projects</p>
              <CgArrowTopRight className='size-4.5 text-white bg-primary p-1 rounded-full'/>
              <p className='text-[#0C363C] text-sm'>8%</p>
            </div>
          </div>
        </div>
        <div className='bg-[#E2FFC8] h-[70%] mx-8 rounded-3xl flex justify-center items-center text-center'>
        <p className='text-gray-800 font-medium'><span className='text-4xl font-bold inline-block pb-1 text-black opacity-85'>6+</span> <br /> Years of <br /> Dedicated <br /> Service</p>
        </div>
        <div className='bg-primary h-[90%] rounded-3xl p-8 flex flex-col justify-end gap-y-5'>
          <BsSpeedometer2 className='text-white size-7'/>
          <p className='text-white text-lg opacity-95'>Achieve Optimal <br /> Efficiency and Boost <br /> Productivity</p>
        </div>
      </div>

    </div>
  )
}

export default Hero
// import { BsStars } from "react-icons/bs";
{/* <BsStars /> */}

// import { CgArrowTopRight } from "react-icons/cg";
{/* <CgArrowTopRight /> */}

// import { FaRegFileAlt } from "react-icons/fa";
{/* <FaRegFileAlt /> */}

{/* <IoStatsChart /> */}
{/* <LuWaves /> */}
{/* <FaRegStar /> */}
{/* <BsGrid1X2 /> */}


 {/* <div className='flex gap-x-3 justify-center'>
        <SignUpBtn title="Get Started"/>
        <TryDemoBtn/>
      </div> */}

      {/* <div className='flex flex-col w-24'>
        <div className='flex justify-end '><BsStars className='size-8 bg-primary text-[#F5F7F9] p-1.5 rounded-full'/></div>
        <div className='flex '><CgArrowTopRight className='size-10 text-primary border border-primary p-1.5 rounded-full'/></div>
        <div className='flex justify-end '><FaRegFileAlt className='size-7 text-primary bg-secondary p-1.5 rounded-full'/></div>
      </div>

      <div className='flex flex-col w-24'>
        <div className='flex justify-end '><BsStars className='size-8 bg-primary text-[#F5F7F9] p-1.5 rounded-full'/></div>
        <div className='flex '><CgArrowTopRight className='size-10 text-primary border border-primary p-1.5 rounded-full'/></div>
        <div className='flex justify-end '><FaRegFileAlt className='size-7 text-primary bg-secondary p-1.5 rounded-full'/></div>
      </div> */}