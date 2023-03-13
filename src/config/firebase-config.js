// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRrkwP-0hvLTP5ZttoW7Lt6LwaBAQ5LIs",
  authDomain: "weeknd-5ecb5.firebaseapp.com",
  projectId: "weeknd-5ecb5",
  storageBucket: "weeknd-5ecb5.appspot.com",
  messagingSenderId: "148839576179",
  appId: "1:148839576179:web:6fc1313786a92b16303006",
  measurementId: "G-28R7YRG1M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);