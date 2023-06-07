import React from "react";

const AuthButtons: React.FC = () => {
  return (
    <>
      <button
        className="btn-outline h-7 hidden sm:flex w-[70px] md:w-28 justify-center items-center"
        //   onClick={}
      >
        Log In
      </button>
      <button
        className="btn-solid h-7 hidden sm:flex w-[70px] md:w-28 justify-center items-center"
        //   onClick={}
      >
        Sign Up
      </button>
    </>
  );
};
export default AuthButtons;
