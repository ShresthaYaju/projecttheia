import React from "react";
import Page from "../../../../learn next/todo/src/app/new/page";

type PageContentProps = {
  children?: React.ReactNode | null;
};

const styles = {
    container:{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "masonary",
        gridGap: "1rem",
        alignTracks: "start",
        justifyTracks: "start",
    }
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <div className="flex justify-center py-4 ">
      <div className="flex w-[90%]  justify-center px-6">
        {/* <div className="  w-full md:w-9/12 gap-3 columns-1 md:columns-3"> */}
        <div className="  w-full md:w-9/12 " style={styles.container}>
          {children && children[0 as keyof typeof children]}
        </div>
        <div className=" flex-col hidden md:flex flex-grow ">
          {children && children[1 as keyof typeof children]}
        </div>
      </div>
    </div>
  );
};
export default PageContent;
