import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1ZQf3CczALCb4zPePoizch8EQB3bjeME",
  authDomain: "clone-22841.firebaseapp.com",
  projectId: "clone-22841",
  storageBucket: "clone-22841.appspot.com",
  messagingSenderId: "315488450909",
  appId: "1:315488450909:web:0b6a7eb8e48b847c0f90b4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
