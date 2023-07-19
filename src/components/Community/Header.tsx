"use client";
import React, { useState, useEffect } from "react";
import { Community } from "@/atoms/communitiesAtom";
import { FaUserAstronaut } from "react-icons/fa";
import useCommunityData from "@/app/Hooks/useCommunityData";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const { communityStateValue, onJoinOrLeaveCommunity, loading } =
    useCommunityData();

  let isJoined = !!communityStateValue.communitySnippets.find(
    (item) => item.communityId === communityData.id
  );

  return (
    <div className="flex flex-col w-full h-36  ">
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
          <div className="flex p-2  ">
            <div className="flex flex-col w-full">
              <div className="text-xl flex gap-1 font-bold">
                {communityData.id}{" "}
                <button
                  className={`btn-${isJoined ? "outline" : "solid"}  text-sm`}
                  onClick={() => {
                    onJoinOrLeaveCommunity(communityData, isJoined);
                  }}
                >
                  {isJoined ? "Joined" : "Join"}
                </button>
              </div>
              <div className="text-xs mt-1 text-primary">
                {communityData.communityDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
