// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-fe580.firebaseapp.com',
  projectId: 'mern-blog-fe580',
  storageBucket: 'mern-blog-fe580.appspot.com',
  messagingSenderId: '405826628468',
  appId: '1:405826628468:web:7bf72438ac9d9b0406da21',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
