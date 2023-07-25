import { Timestamp } from "firebase/firestore";
import { type } from "os";
import { atom } from "recoil";

export type Post={
    id?: string,
    communityID: string,
    creatorID: string,
    creatorDisplayName: string,
    title: string,
    body: string,
    numberOfComments?: number,
    voteStatus?: number,
    imageUrl?: string,
    communityImageURL?: string,
    createdAt: Timestamp

}

interface PostState{
    selectedPost: Post | null,
    posts: Post[],
    // postVotes
}

const defaultPostState: PostState={
    selectedPost: null,
    posts: [],
}

export const postState=atom({
    key: 'postState',
    default: defaultPostState
})