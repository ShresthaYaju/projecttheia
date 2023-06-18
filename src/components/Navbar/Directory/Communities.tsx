import CreateCommunityModal from "@/components/Modal/Auth/CreateCommunity/CreateCommunityModal";
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreateCommunityModal
        open={open}
        handleCloseModal={() => setOpen(false)}
      />
      <li>
        <div className="block py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          <div
            className="group flex justify-center items-center"
            onClick={() => setOpen(true)}
          >
            <IoAddOutline className="text-white group-hover:text-[#5296dd] text-base mr-1 " />
            <p className="group-hover:text-[#5296dd]">Create Community</p>
          </div>
        </div>
      </li>
    </>
  );
};
export default Communities;
