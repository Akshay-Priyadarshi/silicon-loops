import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYX_RpvOmW92ALLKq_KT1BPrP2BtNENjs",
  authDomain: "silicon-loops.firebaseapp.com",
  databaseURL: "https://silicon-loops.firebaseio.com",
  projectId: "silicon-loops",
  storageBucket: "silicon-loops.appspot.com",
  messagingSenderId: "804544630110",
  appId: "1:804544630110:web:74a1e7f61ab19a340153cf",
  measurementId: "G-NZ4P9JJNZB",
};

firebase.initializeApp(firebaseConfig);

class FirebaseApp {
  db = firebase.firestore();
  auth = firebase.auth();
  bucket = firebase.storage();
  rdb = firebase.database();
}

export default FirebaseApp;
