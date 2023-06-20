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