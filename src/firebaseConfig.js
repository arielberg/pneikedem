import { initializeApp } from 'firebase/app';
import { getFirestore, initializeFirestore, enableIndexedDbPersistence, persistentLocalCache  } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAoOzH_i6sQoQq59NEXZzi-JcWplENTGfw",
    authDomain: "famelies.firebaseapp.com",
    projectId: "famelies",
    storageBucket: "famelies.firebasestorage.app",
    messagingSenderId: "876298055884",
    appId: "1:876298055884:web:022e5a07599ceafe829269",
    measurementId: "G-8CM4RFVH1W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with persistent local cache
const db = initializeFirestore(app, { localCache: persistentLocalCache() });




export default db;