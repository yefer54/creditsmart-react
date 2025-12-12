// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDrteNx5dGe8vHIHMBKhnQW-Chjy-5iXTg",
  authDomain: "creditsmart-iuda.firebaseapp.com",
  projectId: "creditsmart-iuda",
  storageBucket: "creditsmart-iuda.firebasestorage.app",
  messagingSenderId: "378712111486",
  appId: "1:378712111486:web:66c788347a528511729b2f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
