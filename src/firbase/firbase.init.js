// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3WxVHGv1nb3iczlUuUsmoLdGO-yXQOEM",
  authDomain: "simple-b9f64.firebaseapp.com",
  projectId: "simple-b9f64",
  storageBucket: "simple-b9f64.firebasestorage.app",
  messagingSenderId: "915316616482",
  appId: "1:915316616482:web:181a3d1a05caa76d96497b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth =  getAuth(app);