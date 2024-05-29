// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6BF8bQdE2KjpQt3jIrN6n76QL1Yg_Gp4",
  authDomain: "netflixgpt1-fd0ae.firebaseapp.com",
  projectId: "netflixgpt1-fd0ae",
  storageBucket: "netflixgpt1-fd0ae.appspot.com",
  messagingSenderId: "890060144199",
  appId: "1:890060144199:web:c26e1caab20c09cbef7b62",
  measurementId: "G-RP990NQ83V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
