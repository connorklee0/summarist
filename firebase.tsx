// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi98Acl53Yru2CLINOBuJHV6ZqaHN-s0Y",
  authDomain: "summarist-c52bb.firebaseapp.com",
  projectId: "summarist-c52bb",
  storageBucket: "summarist-c52bb.firebasestorage.app",
  messagingSenderId: "396667057174",
  appId: "1:396667057174:web:77d6a9a693907d7e257137",
  measurementId: "G-10MFKLFG7L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
