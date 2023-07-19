import React from "react";
import { TabItems } from "./NewPostForm";

type TabItemProps = {
  item: TabItems;
  selected: boolean;
  setSelectedTab:(value:string)=>void
};

const TabItem: React.FC<TabItemProps> = ({ item, selected, setSelectedTab }) => {
  return (
    <div
      className={`flex items-center justify-center grow py-3 cursor-pointer hover:bg-mediumGray rounded-lg ${
        selected &&
        "text-blue rounded-b-none rounded-t-lg border-b-2 border-b-blue"
      }`
     
    }
        onClick={()=>setSelectedTab(item.title)}
    >
      <div className="flex items-center mr-2">
        <div className="text-sm md:text-base">{item.icon}</div>
      </div>
      <div className="text-sm  md:text-base">{item.title}</div>
    </div>
  );
};
export default TabItem;
