"use Client";
import React, { useRef, useState } from "react";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { HiLockClosed } from "react-icons/hi";
import { doc, getDoc, runTransaction, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, firestore } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { Type } from "typescript";

type CreateCommunityModalProps = {
  open: boolean;
  handleCloseModal: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleCloseModal,
}) => {
  const [communityName, setCommunityName] = useState("");
  const communityDescription =useRef<any>(null)
  const charDescription = useRef(100);
  const [charRemaining, setCharRemaining] = useState(20);
  const [communityType, setCommunityType] = useState("Public");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user ] = useAuthState(auth);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 20 && event.target.name==="text") return;
    if (charDescription.current== 0 && event.target.name==="description") return;

    if(event.target.name==="description"){
    charDescription.current=100-event.target.value.length;
      return;
    }
    if(event.target.name==="text"){
    setCommunityName(event.target.value);
    setCharRemaining(20 - event.target.value.length);
    return;
    }
  };

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    dialogRef.current?.close();
    handleCloseModal();
  };

  const communityTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommunityType(event.target.name);
  };

  if (open === true) {
    dialogRef.current?.close();
    dialogRef.current?.showModal();
  }


  const createCommunity = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    event.preventDefault();

  
    if(error) setError("");

    const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(format.test(communityName) || communityName.length < 3){
      setError("Community name must be at least 3 characters long and cannot contain special characters");
      return;
    }

    setLoading(true);

    try {
      
    const communityDocRef= doc(firestore, "communities", communityName);

    await runTransaction(firestore, async (transaction) => {
      const communityDoc = await transaction.get(communityDocRef);


    if(communityDoc.exists()){
      throw new Error("Community name already exists");
    }

    
    // creates community

    transaction.set(communityDocRef, {
      creatorId:user?.uid,
      createdAt: serverTimestamp(),
      numberOfMembers: 1,
      privacyType: communityType,
      communityDescription: communityDescription.current?.value,
    })

    // creates community snippet for user

    transaction.set(doc(firestore,`users/${user?.uid}/communitySnippets`,communityName), {
      communityID: communityName,
      isModerator: true,
    })

  })
      
    } catch (error:any) {
      console.log("HandleCommunityError: ", error);
      setError(error.message);
    }


  setLoading(false);
  }


  return (
    <>
      <dialog
        ref={dialogRef}
        className="rounded-lg py-2 px-4  bg-slate-100 text-black   sm:w-2/3 md:w-2/5 lg:w-2/6 xl:w-[28%]"
      >
        <form >
          <div className="flex mt-2 justify-center ">
            <span className=" w-full font-bold text-xl ">
              Create a community
            </span>
            <div
              className="btn-outline text-slate-500  border-0 right-2 top-3 absolute"
              onClick={handleClose}
            >
              <RxCross2 className="text-lg md:text-xl" />
            </div>
          </div>
          <p className="text-[10px] text-primary">Community name cannot contain special characters or be empty</p>
          <div className="my-2 flex flex-col items-start justify-start ">
            <div className="flex flex-col i justify-center ">
              <p className="text-base font-bold">Name</p>
              <input
                required
                type="text"
                name="text"
                placeholder="Community Name"
                value={communityName}
                onChange={onChange}
                className="mb-2 w-full text-sm border-primary/50 border-[1px] rounded-xl py-1 px-2  hover:border-[#5296dd] focus:outline-none focus:border-[#5296dd]"
              />
              <p
                className={`text-xs ${
                  charRemaining === 0 ? "text-red-600" : ""
                }`}
              >
                {charRemaining} Characters remaining
              </p>
              <p className="text-xs text-red-600">{error}</p>
            </div>

            <div className="flex  w-10 /12 flex-col i justify-center ">
              <p className="text-base font-bold">Description</p>
              <input
                required
                type="textarea"
                maxLength={100}
                name="description"
                placeholder="What is your community about? "
                ref={communityDescription}
                onChange={onChange}
                className="mb-2 w-full text-sm border-primary/50 border-[1px] rounded-xl py-1 px-2  hover:border-[#5296dd] focus:outline-none focus:border-[#5296dd]"
              />
            
              <p className="text-xs text-red-600">{error}</p>
            </div>
          </div>

          

          <div className="mb-2">
            <p className="text-base font-bold">Community Type</p>
            <div className="flex pl-2 flex-col gap-1 items-start-start mt-1">
              <label className="text-xs  flex items-center">
                <input
                  className="mr-1"
                  type="checkbox"
                  name="Public"
                  checked={communityType === "Public"}
                  onChange={communityTypeChange}
                />
                <BsFillPersonFill className="mx-1" />
                Public{" "}
                <span className="ml-1 text-primary text-[9px]">
                  {" "}
                  Anyone can view and post{" "}
                </span>
              </label>

              <label className="text-xs  flex items-center">
                <input
                  className="mr-1 "
                  type="checkbox"
                  name="Restricted"
                  checked={communityType === "Restricted"}
                  onChange={communityTypeChange}
                />
                <BsFillEyeFill className="mx-1" />
                Restricted{" "}
                <span className="ml-1 text-primary text-[9px]">
                  {" "}
                  Anyone can view, but only approved users can post{" "}
                </span>
              </label>

              <label className="text-xs  flex items-center">
                <input
                  className="mr-1"
                  type="checkbox"
                  name="Private"
                  checked={communityType === "Private"}
                  onChange={communityTypeChange}
                />
                <HiLockClosed className="mx-1" />
                Private{" "}
                <span className="ml-1 text-primary text-[9px]">
                  {" "}
                  Only approved users can view and post{" "}
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="btn-outline h-7  flex w-auto  justify-center items-center"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="btn-solid h-7  flex w-auto justify-center items-center"
              type="submit"
              onClick={createCommunity}
            >
              {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Create Community"
          )}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};
export default CreateCommunityModal;
