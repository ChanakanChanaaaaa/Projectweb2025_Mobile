// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBCskREDnAnjt79_6DpWSYmxpZrlTfXZM8",
    authDomain: "studentsync-81e07.firebaseapp.com",
    projectId: "studentsync-81e07",
    storageBucket: "studentsync-81e07.firebasestorage.app",
    messagingSenderId: "808743235044",
    appId: "1:808743235044:web:2b9ce02597b93129ccabf1",
    measurementId: "G-3B66SGKYEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
