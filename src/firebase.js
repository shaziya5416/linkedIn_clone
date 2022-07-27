import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCtD47TiVs9I0R7IpMmvEhF2bCwebILL8o',
  authDomain: 'linkedin-clone-efccd.firebaseapp.com',
  projectId: 'linkedin-clone-efccd',
  storageBucket: 'linkedin-clone-efccd.appspot.com',
  messagingSenderId: '7492350441',
  appId: '1:7492350441:web:ccbc3668c45e2cc80f9b78',
  measurementId: 'G-JWNBQNG62Q',
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
