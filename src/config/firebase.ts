
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCZD5lvl6tdkZa_EiE8KBJbbgBkl-dqoU0",
  authDomain: "offshore-mvp.firebaseapp.com",
  projectId: "offshore-mvp",
  storageBucket: "offshore-mvp.firebasestorage.app",
  messagingSenderId: "1045172311528",
  appId: "1:1045172311528:web:00b07750771fd974e9405d",
  measurementId: "G-MSRNSMKVFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics
export const analytics = getAnalytics(app);

export default app;
