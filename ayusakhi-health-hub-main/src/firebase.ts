import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAgZAISntWz_esUDkDmXqxBfeIXHGRDxsQ",
  authDomain: "ayusakhi-334a7.firebaseapp.com",
  projectId: "ayusakhi-334a7",
  storageBucket: "ayusakhi-334a7.firebasestorage.app",
  messagingSenderId: "255584686509",
  appId: "1:255584686509:web:3ade9d73a71fd1fa855124",
  measurementId: "G-CX1CEGYYSD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
