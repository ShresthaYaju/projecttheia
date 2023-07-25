"use client";
import usePosts from "@/app/Hooks/usePosts";
import { Community } from "@/atoms/communitiesAtom";
import { Post } from "@/atoms/postAtom";
import { auth, firestore } from "@/firebase/clientApp";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { useAuthState } from "react-firebase-hooks/auth";

type PostsProps = {
  communityData: Community;
  userId?: string;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [user] = useAuthState(auth);
  const {
    postStateValue,
    setPostStateValue,
    onVote,
    onDeletePost,
    onSelectPost,
  } = usePosts();

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

      setPostStateValue((prev) => ({
        ...prev,
        posts: userPost as Post[],
      }));

      console.log("getPosts", userPost);
    } catch (error: any) {
      console.log("getPosts error", error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {postStateValue.posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          userIsCreator={user?.uid === post.creatorID}
          userVoteValue={undefined}
          onVote={onVote}
          onDeletePost={onDeletePost}
          onSelectPost={onSelectPost}
        />
      ))}
    </>
  );
};
export default Posts;
