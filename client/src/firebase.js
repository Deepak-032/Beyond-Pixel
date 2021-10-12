import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCbzmyRkHMrGQJQsND0mjAsqyBjUXWcWt8",
    authDomain: "beyond-pixel.firebaseapp.com",
    projectId: "beyond-pixel",
    storageBucket: "beyond-pixel.appspot.com",
    messagingSenderId: "683884287107",
    appId: "1:683884287107:web:81dd00051afe9a64f4f7b6",
    measurementId: "G-C2BPNV9FZF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs }