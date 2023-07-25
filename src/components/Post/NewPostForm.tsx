"use client";
import React from "react";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { BiPoll } from "react-icons/bi";
import TabItem from "./TabItem";
import TextInput from "./PostForm/TextInput";
import ImageUpload from "./PostForm/ImageUpload";
import { Post } from "@/atoms/postAtom";
import { User } from "firebase/auth";
import {
  Timestamp,
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "@/firebase/clientApp";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRouter } from "next/navigation";

type NewPostFormProps = {
  user: User;
  communityId?: string;
};

const formTabs: TabItems[] = [
  {
    title: "Post",
    icon: <IoDocumentText />,
  },
  {
    title: "Image & Video",
    icon: <IoImageOutline />,
  },
  {
    title: "Poll",
    icon: <BiPoll />,
  },
];

export type TabItems = {
  title: string;
  icon: any;
};

const NewPostForm: React.FC<NewPostFormProps> = ({ user, communityId }) => {
  const router = useRouter();

  // console.log("Newpost for something new ", communityId as string)

  const [selectedTab, setSelectedTab] = React.useState(formTabs[0].title);
  const [textInputs, setTextInputs] = React.useState({
    title: "",
    body: "",
  });
  const [selectedFile, setSelectedFile] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleCreatePost = async () => {
    const newPost: Post = {
      communityID: communityId as string,
      creatorID: user.uid,
      creatorDisplayName: user.email!.split("@")[0],
      title: textInputs.title,
      body: textInputs.body,
      numberOfComments: 0,
      voteStatus: 0,
      createdAt: serverTimestamp() as Timestamp,
    };

    setLoading(true);
    try {
      const postDocRef = await addDoc(
        collection(firestore, "UserPosts"),
        newPost
      );

      if (selectedFile) {
        const imageRef = ref(storage, `posts/${postDocRef.id}/image`);
        await uploadString(imageRef, selectedFile, "data_url");
        const downloadUrl = await getDownloadURL(imageRef);

        await updateDoc(postDocRef, {
          imageUrl: downloadUrl,
          id: postDocRef.id,
        });
      }
      router.push(`/${communityId as string}`);
    } catch (error) {
      console.log("handleCreatepost error", error);
      setError(true);
    }
    setLoading(false);
  };

  const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        if (readerEvent.target?.result) {
          setSelectedFile(readerEvent.target.result as string);
        }
      };
    }
  };

  const onTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;
    setTextInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col w-full md:w-10/12 bg-darkGray rounded-lg ">
      <div className="w-full flex">
        {formTabs.map((item) => (
          <TabItem
            key={item.title}
            item={item}
            selected={item.title === selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </div>
      <div className="flex p-4">
        {selectedTab === "Post" && (
          <TextInput
            textInputs={textInputs}
            handleCreatePost={handleCreatePost}
            onChange={onTextChange}
            loading={loading}
          />
        )}
        {selectedTab === "Image & Video" && (
          <ImageUpload
            selectedFile={selectedFile}
            onSelectImage={onSelectImage}
            setSelectedTab={setSelectedTab}
            setSelectedFile={setSelectedFile}
          />
        )}
      </div>
      {error && (
        <div className="text-red-400 text-center p-5">Error creating post</div>
      )}
    </div>
  );
};
export default NewPostForm;
