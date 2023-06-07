import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModal from '@/components/Modal/Auth/AuthModal';

type RightContentProps = {
    // user:
};

const RightContent:React.FC<RightContentProps> = () => {
    
    return (
        <>
        <AuthModal />
        <div className='flex justify-center items-center'>
            <AuthButtons />
        </div>
        </>
    )
}
export default RightContent;