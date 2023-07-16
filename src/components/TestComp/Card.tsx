import React from "react";
import Image from "next/image";

type CardProps = {
  text: string;
  imageUrl: string;
};

const Card: React.FC<CardProps> = ({ text, imageUrl }) => {
  return (
    <div className="border-[1px] card  inline-block border-slate-300 w-[170px] md:w-[200px] rounded-3xl my-4">
      <div className=" relative w-[168px] h-[175px]  md:w-[198px] md:h-[215px]">
        <Image
          src={imageUrl}
          fill
          alt=""
          className="rounded-t-3xl object-cover"
        />
      </div>
      <div className="text-center h-auto px-2 py-4 overflow-">{text}</div>
    </div>
  );
};
export default Card;
