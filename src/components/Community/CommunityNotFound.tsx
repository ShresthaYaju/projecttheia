import React from 'react';
import {MdOutlineError} from 'react-icons/md';
import Link from 'next/link';




const CommunityNotFound:React.FC = () => {
    
    return <div className='w-full text-sm gap-2 mt-32 flex flex-col  items-center h-full justify-center'>
        <MdOutlineError size={50}/>
        <h1>Community Not Found</h1>
        <p >Sorry, we couldn't find the your community.</p>
        <Link href="/"><button  className='btn-solid text-sm flex justify-center cursor-pointer items-center h-8 mt-2'>Return Home</button></Link>
    </div>
}
export default CommunityNotFound;