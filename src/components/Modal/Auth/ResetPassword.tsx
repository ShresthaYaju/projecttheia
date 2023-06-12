import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

const ResetPassword: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendPasswordResetEmail(email);
    setSuccess(true);
  };

  return (
    <div className="flex flex-col items-center w-full">
        <p className="text-black font-bold">THEIA</p>
        <p className="text-black font-bold text-sm mt-2">Reset Password</p>
        <p className="text-black text-xs mt-2 text-center">Enter your email associated with the account and we'll send you a link to reset your password.</p>


    </div>
  )
};
export default ResetPassword;
