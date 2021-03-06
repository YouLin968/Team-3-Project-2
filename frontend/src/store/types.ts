//types holds all possible objects/types

import { IsUnknownOrNonInferrable } from "@reduxjs/toolkit/dist/tsHelpers";
import internal from "stream";

//declare some types as interfaces
export interface User {
    id: number,
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string
}

export interface Chat { 
    id: number,
    chatName: string;  
}

//AppState object that will store one of each interface
//type keyword like calling something an object in Java
export type AppState = {
    user: User,
    chatName: Chat,
    messages: Messages,
    members: Members
    //message: Message
}

export interface Message {
        id: number;
        senderName: string;
        messageText: string;
        sentDateTime: string;
        byMe: boolean;


}

export interface Messages{
        m: Message[]
}

export interface Member{
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface Members{
    m: Member[]
}


//