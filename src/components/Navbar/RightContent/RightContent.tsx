import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModal from '@/components/Modal/Auth/AuthModal';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';

type RightContentProps = {
    user: any;
};

const RightContent:React.FC<RightContentProps> = ({user}) => {
    
    return (
        <>
        <AuthModal />
        <div className='flex justify-center items-center'>
            {user? 
            <button className="btn-outline h-7 hidden sm:flex w-[70px] md:w-28 justify-center items-center" onClick={()=>signOut(auth)}>
                signout
                </button>
                
            :<AuthButtons />}
        </div>
        </>
    )
}
export default RightContent;