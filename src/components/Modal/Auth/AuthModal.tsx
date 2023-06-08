"use client";

import { authModalState } from "@/atoms/authModalAtom";
import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRecoilState } from "recoil";

const AuthModal: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [modalState, setModalState] =useRecoilState(authModalState);

  // const handleOpen = () => {
  //   dialogRef.current?.showModal()
  //   
  // }

  const handleClose = () => {
    setModalState((prev)=>({...prev, open: false}));
    dialogRef.current?.close()
  }

  if (modalState.open===true  ) {
    dialogRef.current?.close()
    dialogRef.current?.showModal();
  }
 

  return (
    <>

      <dialog
  
        ref={dialogRef}
        className="rounded-lg p-3 bg-slate-100 text-black  w-4/5 sm:w-2/3 md:w-2/5 lg:w-2/6 xl:w-[28%]"
      >
        <div className="flex justify-between font-semibold text-lg">
          <span>
            {modalState.view==="login"&& "Log In"}
            {modalState.view==="signup"&& "Sign Up"}
            {modalState.view==="resetPassword"&& "Reset Password"}
          </span>
          <button
            className="btn-outline"
            onClick={handleClose}
          >
            <RxCross2 />
          </button>
        </div>

        <div className="my-3">Here is the modal body</div>

      </dialog>
    </>
  );
};
export default AuthModal;
