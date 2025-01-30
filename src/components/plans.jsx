import { FaCheckCircle } from "react-icons/fa";
import GetStartedBtn from "./ui/get-started-btn";

const Plans = () => {
  return (
    <div className="space-y-6 px-6 lg:px-12 xl:px-16 2xl:px-20 pt-10 lg:pt-20 pb-10 2xl:pb-20 bg-[#0B0F12] ">
        <h1 className='text-3xl font-bold text-center text-white leading-12 md:text-4xl'>Tailored Plans for Your <br /> Manufacturing Scale</h1>
        <p className='text-xs text-center text-white opacity-90 tracking-wider'>Flexible pricing for any bussiness size</p>
        <div className="justify-self-center md:w-[90%] md:px-4 xl:px-24 2xl:px-32 py-8">
            <div className="flex flex-col w-full gap-y-4 gap-x-7 md:flex-row  ">
                <div className="bg-[#1F2326] p-7 space-y-3 rounded-2xl w-full 2xl:space-y-8">
                    <h2 className="text-2xl text-white opacity-95">Starter</h2>
                    <p className="text-sm font-extralight text-white opacity-95 tracking-wider">This package offers the basic features you need to get started.</p>
                    <p className="text-sm font-extralight text-white opacity-95 tracking-wider mt-7"><span className="text-3xl font-semibold">$39</span> / month</p>
                    <button className="w-full border border-white opacity-95 rounded-3xl py-2 text-white text-sm cursor-pointer hover:bg-white hover:opacity-95 hover:text-[#1F2326] hover:font-medium">Get Started</button>
                    <div class="flex items-center px-7 mt-4 mb-5">
                        <div class="flex-grow border-t border-gray-700"></div>
                        <span class="mx-4 text-white opacity-70 text-sm font-light tracking-wider">Features</span>
                        <div class="flex-grow border-t border-gray-700"></div>
                    </div>
                    <div className="space-y-3.5">
                        <div className="flex items-center gap-x-2">
                            <FaCheckCircle className="fill-white"/>
                            <p className='text-sm text-white opacity-95 tracking-wide font-light'>Production upto 10,000 unints per month</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <FaCheckCircle className="fill-white"/>
                            <p className='text-sm text-white opacity-95 tracking-wide font-light'>24/7 technical support</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <FaCheckCircle className="fill-white"/>
                            <p className='text-sm text-white opacity-95 tracking-wide font-light'>Access the production dashboard</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <FaCheckCircle className="fill-white"/>
                            <p className='text-sm text-white opacity-95 tracking-wide font-light'>Initial setup guide</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1F2326] p-7 space-y-3 rounded-2xl w-full 2xl:space-y-8">
                    <h2 className="text-2xl text-white opacity-95">Enterprises</h2>
                    <p className="text-sm font-extralight text-white opacity-95 tracking-wider">This package provides full access to all premium features.</p>
                    <p className="text-sm font-extralight text-white opacity-95 tracking-wider mt-7"><span className="text-3xl font-semibold">$99</span> / month</p>
                    <button className="w-full border border-white opacity-95 rounded-3xl py-2 text-white text-sm cursor-pointer hover:bg-white hover:opacity-95 hover:text-[#1F2326] hover:font-medium">Get Started</button>
                    <div class="flex items-center px-7 mt-4 mb-5">
                        <div class="flex-grow border-t border-gray-700"></div>
                        <span class="mx-4 text-white opacity-70 text-sm font-light tracking-wider">Features</span>
                        <div class="flex-grow border-t border-gray-700"></div>
                    </div>
                    <div className="space-y-3.5">
                        <div className="flex items-center gap-x-2">
                            <FaCheckCircle className="fill-white"/>
                            <p className='text-sm text-white opacity-95 tracking-wide font-light'>Unlimited production units</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <FaCheckCircle className="fill-white"/>
                            <p className='text-sm text-white opacity-95 tracking-wide font-light'>Dedicated account manager</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <FaCheckCircle className="fill-white"/>
                            <p className='text-sm text-white opacity-95 tracking-wide font-light'>Tailored manufacturing solutions</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <FaCheckCircle className="fill-white"/>
                            <p className='text-sm text-white opacity-95 tracking-wide font-light'>Predictive production optimization</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#0C363C]  flex flex-col items-center space-y-3 px-5 py-6 rounded-2xl mt-5 md:mt-7">
                <h2 className="text-2xl text-white opacity-95">Professional</h2>
                <p className="text-sm font-extralight text-white opacity-95 tracking-wider text-center">Designed for greater flexibility, this solution offers <br className="hidden"/>advanced tools for custom tailoring to your needs.</p>
                <GetStartedBtn />
            </div>
        </div>
    </div>
  )
}

export default Plans
