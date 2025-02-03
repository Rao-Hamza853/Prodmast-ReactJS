import React from 'react'
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
import { BsThreeDotsVertical } from "react-icons/bs";
import GetStartedBtn1 from './ui/get-started-btn1';


const Hero = () => {
  return (
    <div className='space-y-6 px-6 lg:px-12 xl:px-16 2xl:px-20 bg-[#F5F7F9] pt-14 pb-20' id='hero'>
      <h1 className='text-3xl font-bold text-center text-success leading-10 md:leading-[3rem] lg:leading-[4.5rem] md:text-4xl lg:text-6xl'>The Future of Manufacturing <br /> with <span className='text-primary'>Latest Technology</span></h1>
      <div className='flex justify-center lg:justify-between'>
        <div className='hidden lg:flex flex-col w-24'>
          <div className='flex justify-end '><HiOutlineSparkles className='size-9 bg-primary text-[#F5F7F9] p-1.5 rounded-full'/></div>
          <div className='flex '><CgArrowTopRight className='size-11  text-primary border border-primary p-1.5 rounded-full'/></div>
          <div className='flex justify-end'><FaRegFileAlt className='size-5 text-primary bg-secondary'/></div>
        </div>
        <div className='flex flex-col gap-y-3 lg:gap-y-5'>
          <p className='text-success text-center pb-4'>Expert tech to elevate your manufacturing. Let's take your bussiness further.</p>
          <div className='flex gap-x-3 justify-center'>
            <GetStartedBtn1/>
            <TryDemoBtn/>
          </div>
        </div>
        <div className='hidden lg:flex flex-col w-24'>
          <div className='flex '><BsStars className='size-8 bg-primary text-[#F5F7F9] p-1.5 rounded-full invisible'/></div>
          <div className='flex justify-end'><IoStatsChart className='size-7 text-success bg-secondary p-1 rounded-ful opacity-75'/></div>
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

      <div className='flex flex-col gap-y-5 md:grid md:grid-cols-5 md:items-end md:-mt-16'>
        <div className='h-[90%]'>
          <img src={industry} alt="industry-img" className='object-cover h-full w-full rounded-3xl'/>
        </div>
        <div className='bg-[#153F45] h-[70%] rounded-3xl flex justify-center items-center text-center md:mx-4 lg:mx-8'>
          <p className='text-gray-300 text-base md:text-sm xl:text-base 2xl:text-lg flex items-center gap-x-6 pb-4 md:flex-col md:pb-0'><span className='text-3xl font-bold inline-block pb-1 -mb-5 md:mt-7 text-white lg:text-4xl 2xl:text-5xl'>100+</span> <br /> Our Esteemed <br />Clients and <br />Partners</p>
        </div>
        <div className='bg-white h-[55%] rounded-3xl p-8 md:p-3 xl:p-8 flex justify-between'>
          <div className='space-y-2 md:space-y-1 lg:space-y-2 2xl:space-y-3.5'>
            <BsGrid1X2 className='bg-secondary size-9 p-2.5 md:size-6 md:p-1.5 xl:size-9 xl:p-2.5 rounded-lg'/>
            <div className='flex items-center gap-x-1 2xl:gap-x-2'>
              <p className='text-sm opacity-90 2xl:text-lg'><span className='md:hidden lg:inline'>Total</span> Projects</p>
              <CgArrowTopRight className='size-4 text-white bg-primary p-0.5 lg:size-4 lg:p-0.5 xl:size-4 xl:p-0.5 rounded-full'/>
              <p className='text-[#0C363C] text-xs 2xl:text-base'>8%</p>
            </div>
            <p className='text-3xl font-bold md:text-lg md:-mt-1 lg:-mt-0 lg:text-3xl'>1951+</p>
            <p className='text-gray-400 text-xs md:-mt-1 lg:-mt-0 2xl:text-sm leading-normal md:leading-2.5 lg:leading-normal'>Increase of <span className='text-[#23db7c] font-medium'>126</span> this month</p>
          </div>
          <BsThreeDotsVertical className='opacity-60'/>
        </div>
        <div className='bg-[#E2FFC8] h-[70%] rounded-3xl flex justify-center items-center text-center md:mx-4 lg:mx-8'>
        <p className='text-gray-800 font-medium text-base md:text-sm xl:text-base 2xl:text-lg flex items-center gap-x-7 pb-4 md:flex-col md:pb-0'><span className='text-3xl font-bold inline-block pb-1 -mb-5 md:mt-7 text-black opacity-85 lg:text-4xl 2xl:text-5xl'>6+</span> <br /> Years of <br /> Dedicated <br /> Service</p>
        </div>
        <div className='bg-primary h-[90%] rounded-3xl p-8 md:p-5 lg:p-8 flex flex-col justify-end gap-y-5 2xl:gap-y-10'>
          <BsSpeedometer2 className='text-white size-7 2xl:size-8'/>
          <p className='text-white text-lg md:text-sm lg:text-base xl:text-lg 2xl:text-xl opacity-95'>Achieve Optimal <br /> Efficiency and Boost <br /> Productivity</p>
        </div>
      </div>

    </div>
  )
}

export default Hero