
import { Timestamp } from '@google-cloud/firestore';
import {atom} from 'recoil';

export interface Community {
    id:string;
    creatorID:string;
    numberofMembers:number;
    privacyType:"public"|"private"| "restricted";
    createdAt?:Timestamp;
    imageURL?:string;
    communityDescription?:string;
}

export interface communitySnippet {
    communityId:string;
    isModerator?:boolean;
    imageURL?:string;
}

interface CommunityState {
    communitySnippets:communitySnippet[];
}

const defaultCommunityState:CommunityState = {
    //mySnippets:[],
    communitySnippets:[]
}

export const communityState = atom<CommunityState>({
    key:"communityState",
    default:defaultCommunityState
})