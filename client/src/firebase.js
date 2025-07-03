// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "home-rental-889ed.firebaseapp.com",
  projectId: "home-rental-889ed",
  storageBucket: "home-rental-889ed.firebasestorage.app",
  messagingSenderId: "297206702507",
  appId: "1:297206702507:web:89d234ffcc6099e59a32ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);