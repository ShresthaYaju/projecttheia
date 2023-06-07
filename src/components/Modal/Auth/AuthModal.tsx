"use client";

import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const AuthModal: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="btn-solid"
        onClick={() => dialogRef.current?.showModal()}
      >
        Dialog
      </button>

      <dialog
        ref={dialogRef}
        className="rounded-lg p-3 bg-slate-100 text-black  w-4/5 sm:w-2/3 md:w-2/5 lg:w-2/6 xl:w-[28%]"
      >
        <div className="flex justify-between font-semibold text-lg">
          <span>Modal Title</span>
          <button
            className="btn-outline"
            onClick={() => dialogRef.current?.close()}
          >
            <RxCross2 />
          </button>
        </div>

        <div className="my-3">Here is the modal body</div>

        <div className="flex justify-end ">
          <button className="btn-solid">Button</button>
          <button className="btn-outline">Button</button>
        </div>
      </dialog>
    </>
  );
};
export default AuthModal;
