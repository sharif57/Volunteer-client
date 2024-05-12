// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6PN6gKgb_ovNEvEZjijOnhYQO9hWYn7E",
  authDomain: "volunteer-e0eac.firebaseapp.com",
  projectId: "volunteer-e0eac",
  storageBucket: "volunteer-e0eac.appspot.com",
  messagingSenderId: "18632248746",
  appId: "1:18632248746:web:19ffa8c2bf382550ff2fd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)