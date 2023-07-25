import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { Community } from "@/atoms/communitiesAtom";
import safeJsonStringify from "safe-json-stringify";
import CommunityNotFound from "@/components/Community/CommunityNotFound";
import Header from "@/components/Community/Header";
import PageContent from "../../components/Layout/PageContent";
import Card from "@/components/TestComp/Card";
import CreatePostLink from "@/components/Community/CreatePostLink";
import Posts from "@/components/Post/Posts";

type CommunityPageProps = {
  params?: any;
};

export default async function CommunityPage({ params }: CommunityPageProps) {
  let communityDocRef: any | undefined;
  let communityDoc: any | undefined;
  let communityData: Community | undefined;

  try {
    communityDocRef = doc(
      firestore,
      "communities",
      params.communityId as string
    );

    communityDoc = await getDoc(communityDocRef);
    communityData = communityDoc.exists()
      ? JSON.parse(
          safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
        )
      : "";
  } catch (error) {
    console.log("dynamic routing community", error);
  }

  console.log("dynamic routing community", communityData);

  return (
    <>
      <div>
        {communityData ? (
          <div>
            <Header communityData={communityData} />
          </div>
        ) : (
          <CommunityNotFound />
        )}
      </div>

     

      <PageContent >
        {communityData && <CreatePostLink params={params} />}
        {communityData && 
        <>
        
            <Posts communityData={communityData} />
        </>
        }
        <>
          <div>RHS</div>
        </>
      </PageContent>
    </>
  );
}
