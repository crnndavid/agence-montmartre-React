// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEExUOwh2nyoJd6E_hSseNJii6FVFuwzI",
  authDomain: "agence-montmartre.firebaseapp.com",
  databaseURL:
    "https://agence-montmartre-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "agence-montmartre",
  storageBucket: "agence-montmartre.appspot.com",
  messagingSenderId: "891327565967",
  appId: "1:891327565967:web:547fc3440a442224ae20fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
