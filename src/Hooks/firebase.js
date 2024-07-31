// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8qU1JKnO8q80VAiDXF2z42mdTam-Fd8c",
  authDomain: "room306-5f4dd.firebaseapp.com",
  projectId: "room306-5f4dd",
  storageBucket: "room306-5f4dd.appspot.com",
  messagingSenderId: "759260237793",
  appId: "1:759260237793:web:551ac395b6872722e60ca0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
