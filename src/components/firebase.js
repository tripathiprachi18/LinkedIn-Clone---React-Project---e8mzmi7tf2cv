import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq-tbhCV_YDT6E1LY_I-fk5mPr3Eui1SE",
    authDomain: "linkedinclone-6a9b3.firebaseapp.com",
    projectId: "linkedinclone-6a9b3",
    storageBucket: "linkedinclone-6a9b3.appspot.com",
    messagingSenderId: "920270243031",
    appId: "1:920270243031:web:1ff7700a977e418ed89c92"
  };
  //this special line of code here connects everything
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
