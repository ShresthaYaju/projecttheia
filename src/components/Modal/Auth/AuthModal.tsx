"use client";

import { authModalState } from "@/atoms/authModalAtom";
import React, { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/clientApp";

const AuthModal: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  // const handleOpen = () => {
  //   dialogRef.current?.showModal()
  //
  // }



  const handleClose = () => {
    setModalState((prev) => ({ ...prev, open: false }));
    dialogRef.current?.close();
    console.log("user", user);
  };

  useEffect(() => {
    handleClose();
  }, [user]);


  if (modalState.open === true) {
    dialogRef.current?.close();
    dialogRef.current?.showModal();
  }

  return (
    <>
      <dialog
        ref={dialogRef}
        className="rounded-lg p-2  bg-slate-100 text-black  w-4/5 sm:w-2/3 md:w-2/5 lg:w-2/6 xl:w-[28%]"
      > 
        <div className="flex mt-2 justify-center ">
          <span className="text-center w-full font-bold text-xl ">
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </span>
          <button className="btn-outline text-slate-400  border-0 right-2 top-3 absolute" onClick={handleClose}>
            <RxCross2 />
          </button>
        </div>

        
        <div className="my-3 flex flex-col items-center justify-center py-1">
          <div className="flex flex-col items-center justify-center w-[70%]">
            <OAuthButtons/>

            <p className="text-slate-400">OR</p>
            <AuthInputs/>
            {/* <ResetPassowrd/> */}

          </div>
        </div>
      </dialog>
    </>
  );
};
export default AuthModal;
