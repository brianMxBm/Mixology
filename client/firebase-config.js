// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 
  projectId: 'mixology-56945',
  storageBucket: 'mixology-56945.appspot.com',
  messagingSenderId: '794862437647',
  appId: '1:794862437647:web:cc8cf2af481b1f9e656a7a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
