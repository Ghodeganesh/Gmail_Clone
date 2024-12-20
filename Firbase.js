
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8EbdAeAc23w9wwrCyytq9YO1fMN_PLKM",
  authDomain: "clone-d4d6d.firebaseapp.com",
  projectId: "clone-d4d6d",
  storageBucket: "clone-d4d6d.firebasestorage.app",
  messagingSenderId: "875282963938",
  appId: "1:875282963938:web:04ae7e91cc4052bbf6edbb",
  measurementId: "G-7R3226H9SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
export const auth=getAuth()
export const provider= new GoogleAuthProvider()