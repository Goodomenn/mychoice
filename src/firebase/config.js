// Firebase configuration for Tour Website (tour.mychoiceethiopia.com)
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "mychoice-ethiopia-admin.firebaseapp.com",
  projectId: "mychoice-ethiopia-admin",
  storageBucket: "mychoice-ethiopia-admin.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:XXXXXXXXXXXXXXXXXXXXXXXX"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export default app;
