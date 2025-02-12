import { FaCheckCircle } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";
import { BsGrid1X2 } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

const Benefits = () => {
  return (
    <div className="grid grid-cols-1 gap-y-12 lg:grid lg:grid-cols-5 xl:grid xl:grid-cols-7 px-6 lg:px-12 xl:px-16 2xl:px-20 2xl:flex 2xl:justify-center 2xl:gap-x-20 bg-white pt-10 lg:pt-20 pb-20">
      <div className="justify-center items-center h-[400px] lg:h-auto flex bg-[#F8FAFB] col-span-2 xl:col-span-3 rounded-3xl 2xl:w-[40%]">
        <div className="bg-white p-4 w-[90%] h-[350px] md:w-[70%] lg:w-[80%] xl:w-[70%] lg:h-[65%] xl:h-[360px] xl:p-7 rounded-3xl relative">
          <div className="space-y-">
            <p className="text-xl text-gray-400 font-semibold">
              Total Projects
            </p>
            <div className="flex items-center gap-x-2">
              <p className="text-lg font-semibold">1475</p>
              <CgArrowTopRight className="size-5 text-[#53BC88] bg-[#F8FAFB] p-1 rounded-full" />
              <p className="text-[#53BC88] text-sm">34%</p>
            </div>
          </div>
          <hr className="text-gray-100 mt-3" />
          <div className="space-y-3 mt-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-400">Finished</p>
              <div className="w-[53%] h-4 bg-[#EBF2F4] rounded-md"></div>
              <p className="text-xs text-black opacity-">10%</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-400">In Progress</p>
              <div className="w-[60%] h-4 bg-[#EBF2F4] rounded-md"></div>
              <p className="text-xs text-black opacity-">13%</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-400">Rejected</p>
              <div className="w-[55%] h-4 bg-[#EBF2F4] rounded-md"></div>
              <p className="text-xs text-black opacity-">11%</p>
            </div>
          </div>
          <hr className="text-gray-100 mt-4" />
          <div className="w-[80%] h-4 bg-[#EBF2F4] rounded-md mt-4"></div>
          <div className="grid grid-cols-8 h-[30%] items-end mt-4 lg:mt-8 xl:mt-4">
            <div className="bg-[#0C363C] w-[60%] h-full rounded-md"></div>
            <div className="bg-[#1AA680] w-[60%] h-[84%] rounded-md"></div>
            <div className="bg-[#0C363C] w-[60%] h-[67%] rounded-md"></div>
            <div className="bg-[#1AA680] w-[60%] h-[90%] rounded-md"></div>
            <div className="bg-red-300 w-[60%] h-[70%] rounded-md"></div>
            <div className="bg-red-300 w-[60%] h-[70%] rounded-md"></div>
            <div className="bg-red-300 w-[60%] h-[70%] rounded-md"></div>
            <div className="bg-red-300 w-[60%] h-[70%] rounded-md"></div>
          </div>
          <div className="bg-white h-auto w-auto p-3 md:p-5 md:h-[48%] md:w-[50%] lg:p-5 lg:h-[45%] lg:w-[70%] xl:h-[50%] xl:w-[65%] rounded-3xl xl:p-6 flex justify-between absolute -bottom-6 -right-3 md:-bottom-6 md:right-7 lg:-bottom-3 lg:-right-6 xl:-bottom-14 xl:-right-9 drop-shadow-md">
            <div className="space-y-2">
              <BsGrid1X2 className="bg-secondary size-9 p-2.5 rounded-lg" />
              <div className="flex items-center gap-x-1">
                <p className="text-sm opacity-90">Total Projects</p>
                <CgArrowTopRight className="size-4 text-white bg-primary p-0.5 rounded-full" />
                <p className="text-[#0C363C] text-xs">8%</p>
              </div>
              <p className="text-3xl font-bold">1951+</p>
              <p className="text-gray-400 text-xs">
                Increase of 
                <span className="text-[#23db7c] font-medium"> 126</span> this
                month
              </p>
            </div>
            <BsThreeDotsVertical className="opacity-60" />
          </div>
        </div>
      </div>
      <div className="col-span-3 xl:col-span-4 space-y-6 px-3 md:px-12 pt-5 pb-2">
        <h2 className="text-3xl font-bold text-centr md:text-4xl">
          Key Benefits of Our System for <br className="hidden md:block lg:hidden xl:block"/> Your Bussiness Efficiency
        </h2>
        <p className="text-sm text-gray-500 pb-2">
          Our systems boost productivity, cut costs, and drive bussiness growth.
        </p>
        <div className="flex  gap-x-3">
          <FaCheckCircle className="fill-primary mt-0.5 size-6 md:mt-1.5 md:size-4" />
          <div className="space-y-2.5">
            <h3 className="text-xl font-bold opacity-95">
              Boosting Quality with Tech
            </h3>
            <p className="text-sm text-gray-500">
              With advanced technology, we help you to achieve top product
              quality. <br /> Discover how we can enhance your standards.
            </p>
          </div>
        </div>
        <div className="flex  gap-x-3">
          <FaCheckCircle className="fill-primary mt-0.5 size-6 md:mt-1.5 md:size-4" />
          <div className="space-y-2.5">
            <h3 className="text-xl font-bold opacity-95">
              Optimization Production Process
            </h3>
            <p className="text-sm text-gray-500">
              Boost factory efficiency and productivity with our innovative
              solutions. <br /> See how the latest technology can maximize your
              output.
            </p>
          </div>
        </div>
        <div className="flex  gap-x-3">
          <FaCheckCircle className="fill-primary mt-0.5 size-6 md:mt-1.5 md:size-4" />
          <div className="space-y-2.5">
            <h3 className="text-xl font-bold opacity-95">
              AI-Driven Production
            </h3>
            <p className="text-sm text-gray-500">
              Leverage the power of AI to transform your manufacturing
              processes, <br /> achieving faster and more effective rersults.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
// #EBF2F4
