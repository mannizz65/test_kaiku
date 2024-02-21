import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCAYEOrc1Gor6bvdH3mPaqOLdx1tdC1HdU",
    authDomain: "project-pw-53d67.firebaseapp.com",
    projectId: "project-pw-53d67",
    storageBucket: "project-pw-53d67.appspot.com",
    messagingSenderId: "54968724989",
    appId: "1:54968724989:web:07c6ac12f11dc033203d94"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const storage = getStorage(app)