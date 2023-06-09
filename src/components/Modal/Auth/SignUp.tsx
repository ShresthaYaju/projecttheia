import { authModalState } from '@/atoms/authModalAtom';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const SignUp:React.FC = () => {
    
    const setAuthModalState = useSetRecoilState(authModalState);

    const [signUpForm, setSignUpForm] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    //firebase logic
    const onSubmit = () => {};
  
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSignUpForm((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    };
  
    return (
      <>
        <form onSubmit={onSubmit}>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
            className="mb-2 mt-2 w-full text-sm border-[1px] rounded-xl py-1 px-2  hover:border-[#5296dd] focus:outline-none focus:border-[#5296dd]"
          />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            className="mb-2 w-full text-sm border-[1px] rounded-xl py-1 px-2  hover:border-[#5296dd] focus:outline-none focus:border-[#5296dd]"
          />

<input
            required
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={onChange}
            className="mb-2 w-full text-sm border-[1px] rounded-xl py-1 px-2  hover:border-[#5296dd] focus:outline-none focus:border-[#5296dd]"
          />

          <button className="btn-solid text-sm w-full h-8 mt-2" type="submit">
            SIgn Up
          </button>
  
          <div className="flex text-[9pt] justify-center mt-2">
            <p className="mr-1 ">God of old?</p>
            <p
              className="text-[#5296dd] font-semibold cursor-pointer"
              onClick={() => {
                  setAuthModalState(
                      (prev) => ({ ...prev, view: "login" })
                  );
              }}
            >
              LOGIN
            </p>
          </div>
        </form>
      </>
    );
}
export default SignUp;