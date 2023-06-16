import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { TiHome } from "react-icons/ti";

const UserMenu: React.FC = () => {
  return (
    <div className="flex flex-col justify-between ml-1 pl-1  relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdownDirectory"
        className="text-white  focus:outline-none font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center "
        onClick={() => {
          const dropdown = document.getElementById("dropdownDirectory");
          dropdown?.classList.toggle("hidden");
        }}
        type="button"
      >
        <div className=" group flex justify-center w-auto items-center">
          <TiHome className="h-5 w-5 group-hover:text-[#5296dd]  text-primary" />
          <p className="hidden group-hover:text-[#5296dd]  md:inline-block text-primary ml-1">
            Home
          </p>
          <AiFillCaretDown className="h-3 mx-1 md:mx-2 w-3 group-hover:text-[#5296dd]  text-primary" />
        </div>
      </button>

      <div className="flex">
        <div
          id="dropdownDirectory"
          className="z-10  hidden right-0 absolute top-[49px] bg-white divide-y divide-gray-100 rounded-b-lg shadow  dark:bg-gray-700"
        >
          <ul
            className="py-2  text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div className="group flex justify-center items-center">

                  <p className="group-hover:text-[#5296dd]">
                    {/* {<Communities />} */}
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserMenu;
