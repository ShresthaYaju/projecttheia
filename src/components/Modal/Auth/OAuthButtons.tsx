import React from 'react';



const OAuthButtons:React.FC = () => {
    
    return (
        <div >
            <button className="btn-solid w-full mb-2  object-contain  h-7 text-xs justify-center items-center">Continue with Google</button>
            <button className="btn-solid w-full mb-4 object-contain  h-7 text-xs justify-center items-center">GitHub</button>
        </div>
    )
}
export default OAuthButtons;