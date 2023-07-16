
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";
import { User, signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import Icons from "./Icons";
import UserMenu from "./UserMenu";
import{ useEffect} from 'react';

type RightContentProps = {
  user?: User | null;
};



const RightContent: React.FC<RightContentProps> = ({ user }) => {

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }
  ,[]);


  return mounted && (
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
