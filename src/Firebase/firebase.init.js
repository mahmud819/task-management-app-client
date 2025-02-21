import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2jQ1-U7yDrFpvdNtQPq_KsvcIc1X5PsA",
  authDomain: "task-management-app-6573d.firebaseapp.com",
  projectId: "task-management-app-6573d",
  storageBucket: "task-management-app-6573d.firebasestorage.app",
  messagingSenderId: "600146327682",
  appId: "1:600146327682:web:89573084b79e3d50741c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);