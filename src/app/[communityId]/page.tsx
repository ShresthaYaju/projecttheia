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

     

      <PageContent gridLayout={true}>
        {communityData && <CreatePostLink params={params} />}
        {communityData && 
        <>
        
            <Card
              text="Climate Change Exacerbates Agricultural Challenges"
              imageUrl="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTRi4XxVO5D_UlpZgB2ZeamNq0rOu2SfbCVZVyJkg07jO2GdYEWPfpW-oI7NswggH8dxEaQ08RBFX_oTzU"
            />
            <Card
              text="Conservation is one of the most critical issues of our time, and Europe’s environmental leadership influences the world. "
              imageUrl="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
            />
            <Card
              text="Climate Change Exacerbates Agricultural Challenges"
              imageUrl="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTRi4XxVO5D_UlpZgB2ZeamNq0rOu2SfbCVZVyJkg07jO2GdYEWPfpW-oI7NswggH8dxEaQ08RBFX_oTzU"
            />
            <Card
              text="Conservation is one of the most critical issues of our time, and Europe’s environmental leadership influences the world. "
              imageUrl="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
            />
            <Card
              text="Climate Change Exacerbates Agricultural ChallengesClimate Change Exacerbates Agricultural ChallengesClimate Change Exacerbates Agricultural ChallengesClimate Change Exacerbates Agricultural ChallengesClimate Change Exacerbates Agricultural Challenges"
              imageUrl="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTRi4XxVO5D_UlpZgB2ZeamNq0rOu2SfbCVZVyJkg07jO2GdYEWPfpW-oI7NswggH8dxEaQ08RBFX_oTzU"
            />
            <Card
              text="Conservation is one of the most critical issues of our time, and Europe’s environmental leadership influences the world. "
              imageUrl="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
            />
            <Card
              text="Climate Change Exacerbates Agricultural Challenges"
              imageUrl="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTRi4XxVO5D_UlpZgB2ZeamNq0rOu2SfbCVZVyJkg07jO2GdYEWPfpW-oI7NswggH8dxEaQ08RBFX_oTzU"
            />
            <Card
              text="Conservation is one of the most critical issues of our time, and Europe’s environmental leadership influences the world. "
              imageUrl="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667"
            />
        </>
        }
        <>
          <div>RHS</div>
        </>
      </PageContent>
    </>
  );
}
