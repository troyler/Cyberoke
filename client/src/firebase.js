// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cyberoke-54944.firebaseapp.com",
  projectId: "cyberoke-54944",
  storageBucket: "cyberoke-54944.appspot.com",
  messagingSenderId: "615472638006",
  appId: "1:615472638006:web:f84d1bd4deb7fa2407d097"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);