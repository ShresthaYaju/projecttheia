"use client";

import React from 'react';
import SearchInput from './SearchInput';
import RightContent from './RightContent/RightContent';
import { auth } from '@/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import Directory from './Directory/Directory';


const Navbar:React.FC = () => {

    const [user, loading, error] = useAuthState(auth);
    
    return (
        <div className='flex h-14 py-[6px] px-3 border-b-[1px]  border-primary/40 items-center'>
            <p className='text-3xl font-bold font-sans flex-shrink-0 mr-2'>THEIA</p>
            <Directory/>
            <SearchInput />
            <RightContent user={user}/>

        </div>

    )
}
export default Navbar;