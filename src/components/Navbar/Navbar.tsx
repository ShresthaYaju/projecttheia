import Image from 'next/image';
import React from 'react';
import SearchInput from './SearchInput';


const Navbar:React.FC = () => {
    
    return (
        <div className='flex h-14 py-[6px] px-3 border-b-[1px] border-primary/40 items-center'>
            <p className='text-3xl font-bold font-sans flex-shrink-0 mr-2'>THEIA</p>
            <SearchInput />

        </div>

    )
}
export default Navbar;