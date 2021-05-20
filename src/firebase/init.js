import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyBrYSAPfzSFNXbTOvKAiIG-1UPIofRUP2c",
  authDomain: "todos-app-4901e.firebaseapp.com",
  projectId: "todos-app-4901e",
  storageBucket: "todos-app-4901e.appspot.com",
  messagingSenderId: "80807563608",
  appId: "1:80807563608:web:412a58f22f15700d3e152d",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;
