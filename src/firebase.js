import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYcC6oNAHrcUJmWyQAtkazkkQ6_qsHq0Q",
  authDomain: "messaging-app-71ede.firebaseapp.com",
  projectId: "messaging-app-71ede",
  storageBucket: "messaging-app-71ede.appspot.com",
  messagingSenderId: "521346186074",
  appId: "1:521346186074:web:b4886968a80e3d939d1163",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
