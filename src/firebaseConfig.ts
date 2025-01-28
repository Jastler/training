import { initializeApp } from "firebase/app";
import { FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNbR8CSZwKdAYzDcbEMy6mzwpYBstWKBg",
  authDomain: "my-portfolio-f5109.firebaseapp.com",
  projectId: "my-portfolio-f5109",
  storageBucket: "my-portfolio-f5109.firebasestorage.app",
  messagingSenderId: "1002923009959",
  appId: "1:1002923009959:web:eaf2f61454e51ce800f882",
  measurementId: "G-7SG48278FF",
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export default firebaseApp;
