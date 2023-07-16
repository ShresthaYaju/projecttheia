"use client"
import { Community, communityState } from "@/atoms/communitiesAtom";
import { auth, firestore } from "@/firebase/clientApp";
import { collection, doc, getDocs } from "firebase/firestore";
import { get } from "http";
import React, { use, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
  const [user] = useAuthState(auth);
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");


  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoinded: boolean
  ) => {
    if (isJoinded) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData.id);
  };

  const getCommunitySnippets = async () => {
    setLoading(true);
    try {
      const snippetDoc = await getDocs(
        collection(firestore, `users/${user?.uid}/communitySnippets`)
      );

      const snippets = snippetDoc.docs.map((doc) => ({ ...doc.data() }));
      console.log("snippets", snippets);
    } catch (error) {
      console.log("getCommunitySnippets Error:", error);
    }
  };

  const joinCommunity = (communityId: string) => {};

  const leaveCommunity = (communityId: string) => {};

useEffect(() => {
    if (!user) return;

    getCommunitySnippets();
    }, [user]);


  return {
    communityStateValue,
    onJoinOrLeaveCommunity,
  };
};
export default useCommunityData;
