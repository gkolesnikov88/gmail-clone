import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAp53dGVUOHJAtVEP7RqvdQWI5RQ62lJXg",
    authDomain: "clone-61599.firebaseapp.com",
    projectId: "clone-61599",
    storageBucket: "clone-61599.appspot.com",
    messagingSenderId: "865794526498",
    appId: "1:865794526498:web:72065aeba211b54f8de97b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, signInWithPopup, provider };