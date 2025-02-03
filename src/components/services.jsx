import { PiAsterisk } from "react-icons/pi";
import { TbStack } from "react-icons/tb";
import { FiTool } from "react-icons/fi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import { BsBox } from "react-icons/bs";

const Services = () => {
  return (
    <div className='space-y-6 px-6 lg:px-12 xl:px-16 2xl:px-20 bg-[#0C363C] pt-10 lg:pt-20 pb-20' id='services'>
      <h1 className='text-2xl md:text-4xl font-bold text-center text-white'>Efficient and Integrated <br /> Manufacturing Services</h1>
      <p className='text-xs text-center text-white opacity-90 tracking-wider'>Simplify Operations with our efficient, quality-focused services.</p>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-2 md:gap-y-3 lg:grid-cols-3 lg:gap-y-7 pt-8">
        <div className="flex flex-col h-[270px] md:h-auto gap-y-16 rounded-2xl p-6 lg:p-8 bg-[#143E44] lg:w-[95%] justify-between transition-all duration-500 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_#e6e6e6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
            <div className="flex justify-between items-center">
                <PiAsterisk className="text-white size-10 opacity-85"/>
                <CgArrowTopRight className="text-white size-6"/>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl text-white font-semibold opacity-95 tracking-wider">Production and Assembly</h2>
                <p className="text-sm text-white opacity-95 font-extralight tracking-wider">Details on production processes, assembly, <br /> capacity, and product types.</p>
            </div>
        </div>
        <div className="flex flex-col h-[270px] md:h-auto gap-y-16 rounded-2xl p-6 lg:p-8 bg-[#143E44] lg:w-[95%] justify-between transition-all duration-500 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_#e6e6e6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
            <div className="flex justify-between items-center">
                <TbStack className="text-white size-10 opacity-85"/>
                <CgArrowTopRight className="text-white size-6"/>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl text-white font-semibold opacity-95 tracking-wider">Custom Manufacturing</h2>
                <p className="text-sm text-white opacity-95 font-extralight tracking-wider">Custom product creation with design and <br /> customization options.</p>
            </div>
        </div>
        <div className="flex flex-col h-[270px] md:h-auto gap-y-16 rounded-2xl p-6 lg:p-8 bg-[#143E44] lg:w-[95%] justify-between transition-all duration-500 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_#e6e6e6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
            <div className="flex justify-between items-center">
                <FiTool className="text-white size-10 opacity-85"/>
                <CgArrowTopRight className="text-white size-6"/>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl text-white font-semibold opacity-95 tracking-wider">Quality Control</h2>
                <p className="text-sm text-white opacity-95 font-extralight tracking-wider">Procedures and systems in place to ensure <br />high product quality.</p>
            </div>
        </div>
        <div className="flex flex-col h-[270px] md:h-auto gap-y-16 rounded-2xl p-6 lg:p-8 bg-[#143E44] lg:w-[95%] justify-between transition-all duration-500 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_#e6e6e6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
            <div className="flex justify-between items-center">
                <AiOutlineSafetyCertificate className="text-white size-10 opacity-85"/>
                <CgArrowTopRight className="text-white size-6"/>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl text-white font-semibold opacity-95 tracking-wider">Technology and Innovation</h2>
                <p className="text-sm text-white opacity-95 font-extralight tracking-wider">Details on the latest manufacturing <br /> technologies and ongoing innovations.</p>
            </div>
        </div>
        <div className="flex flex-col h-[270px] md:h-auto gap-y-16 rounded-2xl p-6 lg:p-8 bg-[#143E44] lg:w-[95%] justify-between transition-all duration-500 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_#e6e6e6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
            <div className="flex justify-between items-center">
                <BsBox className="text-white size-10 opacity-85"/>
                <CgArrowTopRight className="text-white size-6"/>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl text-white font-semibold opacity-95 tracking-wider">Packaging and Logistics</h2>
                <p className="text-sm text-white opacity-95 font-extralight tracking-wider">Packaging and logistics for shipping to <br /> customers and distributors.</p>
            </div>
        </div>
        <div className="flex flex-col h-[270px] md:h-auto gap-y-16 rounded-2xl p-6 lg:p-8 bg-[#143E44] lg:w-[95%] justify-between transition-all duration-500 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_#e6e6e6] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none">
            <div className="flex justify-between items-center">
                <FaChartLine className="text-white size-10 opacity-85"/>
                <CgArrowTopRight className="text-white size-6"/>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl text-white font-semibold opacity-95 tracking-wider">Consulting Market Research</h2>
                <p className="text-sm text-white opacity-95 font-extralight tracking-wider">Services to help companies understand <br /> market needs and provide strategic advice.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services

// import { TbStack } from "react-icons/tb";
{/* <TbStack /> */}

// import { FiTool } from "react-icons/fi";
{/* <FiTool /> */}

// import { AiOutlineSafetyCertificate } from "react-icons/ai";
{/* <AiOutlineSafetyCertificate /> */}

// import { FiBox } from "react-icons/fi";
{/* <FiBox /> */}

// import { FaChartLine } from "react-icons/fa6";
{/* <FaChartLine /> */}

// import { CgArrowTopRight } from "react-icons/cg";
{/* <CgArrowTopRight/> */}