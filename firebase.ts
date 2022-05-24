// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPZtiCSCx9LBdimvdspCmBTOMGS5ArECI",
  authDomain: "time-off-storage.firebaseapp.com",
  projectId: "time-off-storage",
  storageBucket: "time-off-storage.appspot.com",
  messagingSenderId: "636347299752",
  appId: "1:636347299752:web:47f9b363f053011932cf9d",
  measurementId: "G-9GS2NXFMQX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
