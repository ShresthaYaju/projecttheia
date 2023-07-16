
import { User, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { MdLogin } from "react-icons/md";
import { auth } from "@/firebase/clientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [userExists, setUserExists] = React.useState(false);
  const [displayName, setDisplayName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mounted , setMounted] = React.useState(false);

  useEffect(() => {
    if (user) {
      setUserExists(true);
      setDisplayName(user?.displayName ? user?.displayName : "");
      setEmail(user?.email ? user?.email : "");
    }
    setMounted(true);
  }, []);


  

  return mounted && (
    <div className="flex flex-col ml-1 pl-1  relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white  focus:outline-none font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center "
        onClick={() => {
          const dropdown = document.getElementById("dropdown");
          dropdown?.classList.toggle("hidden");
        }}
        type="button"
      >
        {userExists ? (
          <div className="flex">
            <div className=" group flex items-center">
              <FaUserAstronaut className="h-5 w-5  group-hover:text-[#5296dd]  text-primary" />
              <div className="hidden md:flex items-center gap-1 text-primary mx-1 md:mx-2  text-sm group-hover:text-[#5296dd]">
                {displayName
                  ? displayName
                  : email?.split("@")[0]}
              </div>
              <AiFillCaretDown className="h-3 w-3 group-hover:text-[#5296dd]  text-primary" />
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className=" group flex items-center">
              <VscAccount className="h-5 w-5 group-hover:text-[#5296dd]  text-primary" />
              <AiFillCaretDown className="h-3 w-3 ml-1 group-hover:text-[#5296dd]  text-primary" />
            </div>
          </div>
        )}
      </button>

      {userExists ? (
        <div>
          <div className="flex">
            <div
              id="dropdown"
              className="z-10  hidden right-0 absolute top-[49px] bg-white divide-y divide-gray-100 rounded-b-lg shadow  dark:bg-gray-700"
            >
              <ul
                className="py-2 text-xs  md:text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <div className="block px-2 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="group flex justify-center items-center">
                      <CgProfile className="group-hover:text-[#5296dd] h-4 w-4 mr-1" />
                      <div className="group-hover:text-[#5296dd]">Profile</div>
                    </div>
                  </div>
                </li>
                <li
                  onClick={() => {
                    signOut(auth);
                  }}
                >
                  <div className="block px-2 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="group flex justify-center items-center">
                      <MdLogin className="group-hover:text-[#5296dd] h-4 w-4 mr-1" />
                      <div className="group-hover:text-[#5296dd]">Log Out</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Earnings
                  </div>
                </li>
                <li>
                  <div className="block px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign out
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="dropdown"
          className="z-10  hidden right-0 absolute top-[49px] bg-white divide-y divide-gray-100 rounded-b-lg shadow  dark:bg-gray-700"
        >
          <ul
            className="py-2  text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li
              className="px-2 group w-40 dark:hover:bg-gray-600 rounded-lg"
              onClick={() => {
                setAuthModalState({ open: true, view: "login" });
              }}
            >
              <a
                href="#"
                className="block  py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div className="group flex justify-center items-center">
                  <CgProfile className="group-hover:text-[#5296dd] h-4 w-4 mr-1" />
                  <div className="group-hover:text-[#5296dd]">
                    Login / SignUp
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
