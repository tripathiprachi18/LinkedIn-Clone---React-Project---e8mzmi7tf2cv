import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD8X0UP7lujzD4DNHKIHID57lYt3lmuYg",
  authDomain: "linkedin-clone-950c5.firebaseapp.com",
  projectId: "linkedin-clone-950c5",
  storageBucket: "linkedin-clone-950c5.appspot.com",
  messagingSenderId: "727659279025",
  appId: "1:727659279025:web:5f59f45d9a0db0a321e890",
  measurementId: "G-6X2QC40WNK"
};
  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
