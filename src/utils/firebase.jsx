// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqNEwQMOLFr-xhdYAS4GdtE7zzYtPUqXM",
  authDomain: "netflixgpt-84c4f.firebaseapp.com",
  projectId: "netflixgpt-84c4f",
  storageBucket: "netflixgpt-84c4f.appspot.com",
  messagingSenderId: "451790569467",
  appId: "1:451790569467:web:1fe4539dd32699175f155e",
  measurementId: "G-VZ8R1LPBPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();