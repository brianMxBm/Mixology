// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { firebaseKey } from 'react-native-dotenv';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: firebaseKey,
  projectId: 'mixology-56945',
  storageBucket: 'mixology-56945.appspot.com',
  messagingSenderId: '794862437647',
  appId: '1:794862437647:web:cc8cf2af481b1f9e656a7a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
