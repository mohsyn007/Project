// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8KFH00kEvLLSLz_Sy7EHTc61eOqjJfso",
  authDomain: "react-auth-cb6ac.firebaseapp.com",
  projectId: "react-auth-cb6ac",
  storageBucket: "react-auth-cb6ac.firebasestorage.app",
  messagingSenderId: "159414845088",
  appId: "1:159414845088:web:b356d3f787d82c7c9a13c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);