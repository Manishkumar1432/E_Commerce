// "use client" is NOT required here. Firebase runs safely on client imports.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYwt8pgMs8gkW4z6gw31DJCPWmJgKMCnk",
  authDomain: "ttttt-a8021.firebaseapp.com",
  databaseURL: "https://ttttt-a8021-default-rtdb.firebaseio.com",
  projectId: "ttttt-a8021",
  storageBucket: "ttttt-a8021.firebasestorage.app",
  messagingSenderId: "101802531833",
  appId: "1:101802531833:web:d3de1958d35f7208057b28",
  measurementId: "G-QMD3VVSRDR",
};

// Initialize Firebase only ONCE
const app = initializeApp(firebaseConfig);

// Export Auth
export const auth = getAuth(app);
