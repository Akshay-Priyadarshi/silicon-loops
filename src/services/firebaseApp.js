import firebase from "firebase";

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

export const db = firebase.firestore();
export const auth = firebase.auth();
export const bucket = firebase.storage();
export const rdb = firebase.database();
