// database/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Indsæt din egen config her fra Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBOHtowLm-4Xd3ZnQKkZaCGAC2kjeB36TM",
  authDomain: "expo-app-9e160.firebaseapp.com",
  projectId: "expo-app-9e160",
  storageBucket: "expo-app-9e160.firebasestorage.app",
  messagingSenderId: "555574245415",
  appId: "1:555574245415:web:7721881fdfd44c1b88b602"
};

// Init kun én gang
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Brug RTDB-URL’en fra Realtime Database (Belgium = europe-west1)
export const rtdb = getDatabase(
  firebaseApp,
  "https://expo-app-9e160-default-rtdb.europe-west1.firebasedatabase.app"
);