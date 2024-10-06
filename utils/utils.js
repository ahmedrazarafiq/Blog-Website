 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 import { getFirestore, doc, setDoc,getDoc,collection,addDoc,  getDocs, query, where,deleteDoc} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB60iU6r-J5TaTBnIW0AuCH7pO0v6y-Jzw",
  authDomain: "blog-website-82855.firebaseapp.com",
  projectId: "blog-website-82855",
  storageBucket: "blog-website-82855.appspot.com",
  messagingSenderId: "841873218458",
  appId: "1:841873218458:web:ba0172baf005b099b2f823"
}

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);
const storage = getStorage(app)
console.log(auth)

export {
  auth,
  db,
  storage,
  onAuthStateChanged,
  doc, 
  setDoc,
  ref, 
  uploadBytes,
  getDownloadURL,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword ,
  signOut,
  getDoc,
  collection,
  addDoc,
  getDocs,
  query, 
  where,
  deleteDoc,
}