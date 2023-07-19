"use client"
import React, { useEffect } from "react";
import Page from "../../../../learn next/todo/src/app/new/page";

type PageContentProps = {
  children?: React.ReactNode | null;
  gridLayout?: boolean;
};

const styles = {
  container: {
    display: "grid",
    // gridTemplateColumns: "repeat(1, 1fr) ",
    gridTemplateRows: "masonary",
    gridGap: "1rem",
    alignTracks: "start",
    justifyTracks: "start",
  },
};

const PageContent: React.FC<PageContentProps> = ({ children, gridLayout }) => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }
  ,[]);
  return mounted && (
    <>
      <div className="flex justify-center py-4">
        <div className="flex w-[90%] px-6">
          <div className="  w-full md:w-9/12 " >
            {children && children[0 as keyof typeof children]}
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4 ">
        <div className={`flex w-[90%]  justify-center ${gridLayout &&"gap-2"} px-6`}>
          {/* <div className="  w-full md:w-9/12 gap-3 columns-1 md:columns-3"> */}
          <div className={`  w-full  ${gridLayout&&"md:w-9/12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`} style={styles.container}>
            {children && children[1 as keyof typeof children]}
          </div>
          <div className=" flex-col hidden md:flex flex-grow ">
            {children && children[2 as keyof typeof children]}
          </div>
        </div>
      </div>
    </>
  );
};
export default PageContent;
