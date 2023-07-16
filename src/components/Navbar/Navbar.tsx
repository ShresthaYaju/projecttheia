"use client";

import React, { useEffect } from "react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { auth } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Directory from "./Directory/Directory";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userExists, setUserExists] = React.useState(false);

  useEffect(() => {
    if (!user) return;
    setUserExists(true);
  }, [user]);

  return (
    <div className="flex h-14 py-[6px] md:justify-between px-3 border-b-[1px]  border-primary/40 items-center max-w-full">
      <div className="flex items-center">
        <div className="text-3xl font-bold font-sans flex-shrink-0 mr-1 md:mr-2">
          THEIA
        </div>
        <div> {userExists && <Directory />}</div>
      </div>
      <SearchInput user={user} />
      <RightContent user={user} />
    </div>
  );
};
export default Navbar;
