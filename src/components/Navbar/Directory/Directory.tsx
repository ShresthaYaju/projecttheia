import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import{TiHome} from "react-icons/ti";



const UserMenu: React.FC = () => {


    return (
        <div className="flex flex-col ml-1 pl-1  relative">
        <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdownDirectory"
            className="text-white  focus:outline-none font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center "
            onClick={() => {
                const dropdown = document.getElementById("dropdownDirectory");
                dropdown?.classList.toggle("hidden");
            } }
            type="button"
        >
             <div className=" group flex justify-center items-center">
                <TiHome className="h-5 w-5 group-hover:text-[#5296dd]  text-primary"/>
                <p className="hidden md:inline-block text-primary">Home</p>
                <AiFillCaretDown className="h-3 w-3 group-hover:text-[#5296dd]  text-primary"/>
                </div>
        </button>

       
    </div>
    );
};
export default UserMenu;
