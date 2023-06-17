import React from "react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
  IoAddOutline,
} from "react-icons/io5";

const Icons: React.FC = () => {
  return (
    <div className="flex">
      <div className=" hidden md:flex items-center border-r-[1px] mr-[1px] px-1 border-primary/40">
        <div className="flex mx-[1px] p-0.5 md:p-1 cursor-pointer ">
          <BsArrowUpRightCircle className="text-xl text-primary/80 hover:text-[#5296dd] transition-all duration-300 ease-in-out" />
        </div>
        <div className="flex mx-[1px] p-0.5 md:p-1 cursor-pointer ">
          <IoFilterCircleOutline className="text-2xl text-primary/80 hover:text-[#5296dd] transition-all duration-300 ease-in-out" />
        </div>
        <div className="flex mx-[1px] p-0.5 md:p-1 cursor-pointer ">
          <IoVideocamOutline className="text-2xl text-primary/80 hover:text-[#5296dd] transition-all duration-300 ease-in-out" />
        </div>
      </div>
      <div className="ml-1 flex border-r-[1px] px-1 border-primary/40">

      <div className="flex mx-[1px] p-0.5 md:p-1 cursor-pointer ">
          <BsChatDots className="text-xl text-primary/80 hover:text-[#5296dd] transition-all duration-300 ease-in-out" />
        </div>
      <div className="flex mx-[1px] p-0.5 md:p-1 cursor-pointer ">
          <IoNotificationsOutline className="text-xl text-primary/80 hover:text-[#5296dd] transition-all duration-300 ease-in-out" />
        </div>
      <div className=" md:flex mx-[1px] p-0.5 md:p-1 cursor-pointer ">
          <IoAddOutline className="text-2xl text-primary/80 hover:text-[#5296dd] transition-all duration-300 ease-in-out" />
        </div>

      </div>
    </div>
  );
};
export default Icons;
