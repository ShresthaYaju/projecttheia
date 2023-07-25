"use client";
import React, { useEffect } from "react";
import Masonry from "react-masonry-css";

type PageContentProps = {
  children?: React.ReactNode | null;
  gridLayout?: boolean;
};



const PageContent: React.FC<PageContentProps> = ({ children, gridLayout }) => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <>
        <div className="flex justify-center py-4">
          <div className="flex w-[90%] px-6">
            <div className="  w-full md:w-9/12 ">
              {children && children[0 as keyof typeof children]}
            </div>
          </div>
        </div>

        <div className="flex justify-center py-4 ">
          <div
            className={`flex w-[90%]  justify-center 
            } px-6`}
          >
            <div
              className={`  w-full md:w-9/12 flex flex-col `}
             
            >
              {children && children[1 as keyof typeof children]}
            </div>

            <div className=" flex-col hidden md:flex flex-grow ">
              {children && children[2 as keyof typeof children]}
            </div>
          </div>
        </div>
      </>
    )
  );
};
export default PageContent;
