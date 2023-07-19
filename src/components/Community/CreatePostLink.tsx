"use client";
import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { useRouter } from "next/navigation";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineLink } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { useSetRecoilState } from "recoil";

export default function ({ params }: { params: { communityId: string } }) {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);

  const onClick = () => {
    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }

    // console.log("params",params.communityId)

    router.push(`/${params.communityId as string}/Submit`);
  };

  return (
    <div
      className="w-full md:w-full lg:w-11/12 border-[1px] card cursor-pointer   border-slate-300 hover:border-blue duration-300 rounded-3xl my-4 p-3"
      onClick={onClick}
    >
      <div className="flex  flex-1 items-center ">
        <FaUserAstronaut
          className=" bg-blue border-4 border-background p-2 rounded-full"
          size={50}
        />
        <form
          className={`flex flex-1 min-w-[100px] border-[1px]  mx-1 md:mx-2 w-auto  border-primary/40 rounded-e-2xl rounded-s-2xl grow items-center p-[1px]`}
        >
          <input
            type="text"
            placeholder="Start a post"
            className="flex-1 px-4 bg-inherit cursor-pointer focus:outline-none  .placeholder-primary/60 "
          />
          <button type="submit" hidden></button>
        </form>
        <BsCardImage size={20} className="mx-1 text-primary" />
        <AiOutlineLink size={22} className="text-primary" />
      </div>
    </div>
  );
}
// export default CreatePostLink;
