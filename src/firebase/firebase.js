import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCko_Gnlz3OhzEIy4I4w4VwvHI-q5AHOUY',
    authDomain: 'global-awars.firebaseapp.com',
    projectId: 'global-awars',
    storageBucket: 'global-awars.firebasestorage.app',
    messagingSenderId: '411797599207',
    appId: '1:411797599207:web:ea0e4cdab33c07c45a0342',
    measurementId: 'G-5DD8RZCZS6'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;