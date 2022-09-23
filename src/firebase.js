// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyApKJ5ctoCMxqM7WCQj_8H28qEE4a2MEFw",
  authDomain: "clone2-3cc18.firebaseapp.com",
  projectId: "clone2-3cc18",
  storageBucket: "clone2-3cc18.appspot.com",
  messagingSenderId: "619589573073",
  appId: "1:619589573073:web:d90bf5c4c15907f954e8f0",
  measurementId: "G-SE27TYQXX3"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = firebase.auth();

  export {db,auth};