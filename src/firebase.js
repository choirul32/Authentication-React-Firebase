// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDewI339vKHeC28hxwuAGJbIcKf6cC486k",
  authDomain: "project-1-2f8f5.firebaseapp.com",
  projectId: "project-1-2f8f5",
  storageBucket: "project-1-2f8f5.appspot.com",
  messagingSenderId: "844906628535",
  appId: "1:844906628535:web:6a41043c670b6a11d65432",
  measurementId: "G-ZXHQSZ3GZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}

export function useAuth(){
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])
  return currentUser;
}