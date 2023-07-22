"use client"
import { Community } from "@/atoms/communitiesAtom";
import { firestore } from "@/firebase/clientApp";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect } from "react";

type PostsProps = {
  communityData: Community;
  userId?: string;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const getPosts = async () => {
    // get posts from firestore
    try {

      const userPostQuery = query(
        collection(firestore, "UserPosts"),
        where("communityID", "==", communityData.id),
        orderBy("createdAt", "desc")
      );
      const userPostDocs = await getDocs(userPostQuery);
      const userPost = userPostDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("getPosts", userPost);
    } catch (error: any) {
      console.log("getPosts error", error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <div>Have a good coding</div>;
};
export default Posts;
