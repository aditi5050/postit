// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYLFhBCF9Vk9bocpUWE2c6NcA1I4mZyHM",
  authDomain: "postit-aa3c4.firebaseapp.com",
  projectId: "postit-aa3c4",
  storageBucket: "postit-aa3c4.appspot.com",
  messagingSenderId: "19154445780",
  appId: "1:19154445780:web:a5734b92405b28bf3d2241",
  measurementId: "G-0HB547HKL1"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
