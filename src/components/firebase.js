// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCixQaK4miJtRNRVePT0xpS-2Mtsv1p14s",
  authDomain: "e-commerce-c169d.firebaseapp.com",
  projectId: "e-commerce-c169d",
  storageBucket: "e-commerce-c169d.appspot.com",
  messagingSenderId: "34771711156",
  appId: "1:34771711156:web:7a1859f3cb2ca1df3453e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

