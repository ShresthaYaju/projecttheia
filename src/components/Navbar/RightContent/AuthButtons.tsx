"use client";
import { authModalState } from "@/atoms/authModalAtom";
import React, { use } from "react";
import { useSetRecoilState } from "recoil";

const AuthButtons: React.FC = () => {
  const setAuthModalState= useSetRecoilState(authModalState);
  return (
    <>
      <button
        className="btn-outline h-7 hidden sm:flex w-[70px] md:w-28 justify-center items-center"
          onClick={
            ()=>setAuthModalState({open: true, view: "login"})
          }
      >
        Log In
      </button>
      <button
        className="btn-solid h-7 hidden  sm:flex w-[70px] md:w-28 justify-center items-center"
        onClick={
          ()=>setAuthModalState({open: true, view: "signup"})
        }
      >
        Sign Up
      </button>
    </>
  );
};
export default AuthButtons;
