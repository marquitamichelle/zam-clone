import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {


  apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
  authDomain: "challenge-4b2b2.firebaseapp.com",
  databaseURL: "https://challenge-4b2b2.firebaseio.com",
  projectId: "challenge-4b2b2",
  storageBucket: "challenge-4b2b2.appspot.com",
  messagingSenderId: "962418448875",
  appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
};

// Initialize Firebase
const fireapp = firebase.initializeApp(firebaseConfig);
const db = fireapp.firestore();
const auth = firebase.auth();

export { db, auth };

// const firebaseConfig = {
//   apiKey: "AIzaSyAUN3OnAM37aCzIIiMQUARdC9o7ZJp3PeU",
//   authDomain: "zam-fullstack.firebaseapp.com",
//   projectId: "zam-fullstack",
//   storageBucket: "zam-fullstack.appspot.com",
//   messagingSenderId: "747620004818",
//   appId: "1:747620004818:web:331c9be8198b3ff6880e0b",
//   measurementId: "G-Q8X18SY17V",
// };

// export { db, auth };
