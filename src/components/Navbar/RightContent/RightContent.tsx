import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import { User, signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <div className="flex justify-center items-center">
        {user ? (
        <Icons/>
        ) : (
          <AuthButtons />
        )}
        <UserMenu user={user}/>
      </div>
    </>
  );
};
export default RightContent;
