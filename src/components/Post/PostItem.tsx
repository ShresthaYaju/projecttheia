import { Post } from "@/atoms/postAtom";
import React from "react";
import Image from "next/image";
import { PiArrowFatUpFill, PiArrowFatDownFill } from "react-icons/pi";
import moment from "moment";
import { BiComment } from "react-icons/bi";
import { IoArrowRedoOutline, IoBookmarkOutline } from "react-icons/io5";
import {  AiOutlineDelete } from "react-icons/ai";

type PostItemProps = {
  post: Post;
  userIsCreator?: boolean;
  userVoteValue?: number;
  onVote: () => {};
  onDeletePost: () => {};
  onSelectPost: () => void;
};

const PostItem: React.FC<PostItemProps> = ({
  post,
  userIsCreator,
  userVoteValue,
  onVote,
  onDeletePost,
  onSelectPost,
}) => {
  return (
    <>
      <div
        className="border-[1px]  flex items-center px-4 card w-full md:w-11/12 border-slate-300 rounded-3xl my-4 hover:cursor-pointer hover:border-blue duration-300 break-inside-avoid"
        onClick={onSelectPost}
      >
        {/* vote section  */}
        <div className="flex flex-col items-center">
          <PiArrowFatUpFill
            className={`${
              userVoteValue === 1 ? "text-teal-500" : "text-primary/40"
            } cursor-pointer hover:text-teal-500 duration-300 ease-in-out`}
            size={30}
            onClick={onVote}
          />
          <p className="text-xs md:text-base">{post.voteStatus}</p>
          <PiArrowFatDownFill
            className={`${
              userVoteValue === -1 ? "text-red-400" : "text-primary/40"
            } cursor-pointer hover:text-red-500 duration-300 ease-in-out`}
            size={30}
            onClick={onVote}
          />
        </div>

        {/* post content  */}
        <div className="flex flex-col  justify-center w-full">
          <p className="text-[9px] text-primary md:text-[12px] px-2 my-2 ">
            Posted By {post.creatorDisplayName}{" "}
            {moment(new Date(post.createdAt?.seconds * 1000)).fromNow()}
          </p>

          {/* text and image  */}
          <div className="flex  justify-between">
            <div className=" text-xs md:text-base  px-2 py-0">{post.title}</div>

            {post.imageUrl && (
              <div className=" relative mb-2 min-w-[100px] md:min-w-[150px] w-[100px] h-[100px]  md:w-[150px] md:h-[150px] ">
                <Image
                  src={post.imageUrl!}
                  fill
                  alt=""
                  className="rounded-3xl  object-cover"
                />
              </div>
            )}
          </div>

          {/* comment section  */}
          <div className="flex gap-3 mb-4 mx-2 text-primary">
            <div className="flex items-center p-1 rounded-xl hover:bg-primary/40 duration-300 ease-in-out">
              <BiComment size={20} />
              <p className="ml-1 text-xs md:text-sm">{post.numberOfComments} <span className="hidden md:inline-block md:text-sm" >Comments</span></p>
            </div>
            <div className="flex items-center p-1 rounded-xl hover:bg-primary/40 duration-300 ease-in-out">
              <IoArrowRedoOutline size={23} />
              <p className="ml-1 hidden md:flex md:text-sm"> Share</p>
            </div>
            <div className="flex items-center p-1 rounded-xl hover:bg-primary/40 duration-300 ease-in-out">
              <IoBookmarkOutline size={20} />
              <p className="ml-1 hidden md:flex md:text-sm"> Save</p>
            </div>
            {userIsCreator && (
               <div className="flex items-center p-1 rounded-xl hover:bg-primary/40 duration-300 ease-in-out" onClick={onDeletePost}>
               <AiOutlineDelete size={20} />
               <p className="ml-1 hidden md:flex md:text-sm"> Delete</p>
             </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default PostItem;
