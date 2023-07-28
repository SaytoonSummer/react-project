//Archivo correspondiente a la base para usar Firebase
import { firebaseConfig } from "./Credentials";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);