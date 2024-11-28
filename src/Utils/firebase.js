// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg6jQaTl97KM71EoocOA0r69Sy5B4d9VQ",
  authDomain: "netflixclone-3a9be.firebaseapp.com",
  projectId: "netflixclone-3a9be",
  storageBucket: "netflixclone-3a9be.firebasestorage.app",
  messagingSenderId: "1033717375006",
  appId: "1:1033717375006:web:771330261e1e5ceec20e0f",
  measurementId: "G-CJG6YNXPWH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
