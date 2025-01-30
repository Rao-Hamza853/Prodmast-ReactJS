import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineCleaningServices } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import SignUpBtn1 from "./ui/signup-btn1";

const Sidebar = () => {
  return (
    <div className="bg-transparent w-full absolute top-8 right-4">
      <div className="flex flex-col gap-y-1 w-[58%] bg-white divide-y divide-gray-300 rounded-lg float-end">
        <a href="#hero">
        <div className="flex items-center gap-x-3 py-1.5 px-2">
          <IoHomeOutline />
          <h2 className="text-sm font-medium text-[#020817]">Home</h2>
        </div>
        </a>

        <a href="#solutions">
        <div className="flex items-center gap-x-3 py-1.5 px-2">
          <AiOutlineSolution />
          <h2 className="text-sm font-medium text-[#020817]">About</h2>
        </div>
        </a>

       <a href="#pricing">
       <div className="flex items-center gap-x-3 py-1.5 px-2">
          <MdOutlineCleaningServices />
          <h2 className="text-sm font-medium text-[#020817]">Services</h2>
        </div>
       </a>

        <a href="#footer">
          <div className="flex items-center gap-x-3 py-1.5 px-2">
          <LuContact />
          <h2 className="text-sm font-medium text-[#020817]">Contact</h2>
        </div>
        </a>
        <SignUpBtn1/>
      </div>
    </div>
  );
};

export default Sidebar;
