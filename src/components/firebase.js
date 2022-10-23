import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbj6mQ6JxaRgn4lITKTJBlo4W2HbYXiFc",
  authDomain: "transsoc-e4182.firebaseapp.com",
  projectId: "transsoc-e4182",
  storageBucket: "transsoc-e4182.appspot.com",
  messagingSenderId: "1050822123998",
  appId: "1:1050822123998:web:aef57789b3da4e2fc1bd4f",
  measurementId: "G-SHN9PEKTQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
  
export default db;