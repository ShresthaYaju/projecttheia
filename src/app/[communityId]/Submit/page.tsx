"use client"
import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Post/NewPostForm";
import { auth } from "@/firebase/clientApp";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type submitProps = {};

const SubmitPostPage: React.FC<submitProps> = ({params}:any) => {
    const [user]= useAuthState(auth)


  return (
    <PageContent gridLayout={false}>
      <>
        <div className="font-semibold w-full text-xl pt-4">Create a post</div>
      </>
      <>
       {user && <NewPostForm user={user} communityId={params.communityId as string}/>}
      </>
      <></>
    </PageContent>
  );
};
export default SubmitPostPage;
