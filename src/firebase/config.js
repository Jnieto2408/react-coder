// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdgR-hhR3cP2G6IdjhaDUnY33INU6bGCE",
  authDomain: "react-josenieto.firebaseapp.com",
  projectId: "react-josenieto",
  storageBucket: "react-josenieto.appspot.com",
  messagingSenderId: "324379452158",
  appId: "1:324379452158:web:f6a68761fbbc7d6cd73baf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()