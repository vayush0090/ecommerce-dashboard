// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB78U7CclsbUJrCnW6J_EO94GBrQY63mzs",
  authDomain: "auth-567b8.firebaseapp.com",
  projectId: "auth-567b8",
  storageBucket: "auth-567b8.firebasestorage.app",
  messagingSenderId: "388783164935",
  appId: "1:388783164935:web:0b69169d1fc07c81ae24a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireDb = getFirestore(app)