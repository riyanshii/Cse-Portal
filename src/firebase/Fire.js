// Import the functions you need from the SDKs you need
// import * as firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAuth, GoogleAuthProvider } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdkIIqkXH9T53w-620_7NIckZbryl2DW4",
  authDomain: "final-one-2b1e3.firebaseapp.com",
  projectId: "final-one-2b1e3",
  storageBucket: "final-one-2b1e3.appspot.com",
  messagingSenderId: "533021244721",
  appId: "1:533021244721:web:6d9d882eb38c1a29cc4410"
};
// Initialize Firebase
const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;