// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "apartmnt-73084.firebaseapp.com",
  projectId: "apartmnt-73084",
  storageBucket: "apartmnt-73084.appspot.com",
  messagingSenderId: "268456323944",
  appId: "1:268456323944:web:1c3969e51c2d19e6a984dd",
  measurementId: "G-C0BGKY6BKL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
