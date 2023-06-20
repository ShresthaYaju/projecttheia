import React from "react";
import { Community } from "@/atoms/communitiesAtom";
import { FaUserAstronaut } from "react-icons/fa";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  return (
    <div className="flex flex-col w-full h-36 ">
      <div className="h-1/2 bg-blue" />

      <div className="flex justify-center">
        <div className="w-[90%] flex border-b-[1px] border-primary/40">
          {communityData.imageURL ? (
            "image"
          ) : (
            <FaUserAstronaut
              className="relative top-[-1.5rem] bg-blue border-4 border-background p-2 rounded-full"
              size={60}
            />
          )}
          <div className="flex p-2 ">
            <div className="flex flex-col">
              <p className="text-xl font-bold">{communityData.id}</p>
                <p className="text-xs text-primary">{communityData.communityDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
