// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMDSx9aar7v_EHGdMKlfbt6XP2NFgGn8M",
  authDomain: "new-ea467.firebaseapp.com",
  projectId: "new-ea467",
  storageBucket: "new-ea467.firebasestorage.app",
  messagingSenderId: "164508298398",
  appId: "1:164508298398:web:21fb840c6278cc0ba8df8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);