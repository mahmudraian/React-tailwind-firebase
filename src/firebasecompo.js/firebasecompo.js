// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh4cP1kaoYECEdgdjiTTJSSJjAjRSWuAQ",
  authDomain: "auth-router-context-e866d.firebaseapp.com",
  projectId: "auth-router-context-e866d",
  storageBucket: "auth-router-context-e866d.appspot.com",
  messagingSenderId: "215590810765",
  appId: "1:215590810765:web:37c5d055cdd5d45bdc5ec4",
  measurementId: "G-W3KWQ1RLGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;