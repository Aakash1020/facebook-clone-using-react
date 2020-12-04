import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV3x0iXpXnsC7Qx4w8I9SbOsndQ3ENfpA",
  authDomain: "facebook-clone-f69a8.firebaseapp.com",
  databaseURL: "https://facebook-clone-f69a8.firebaseio.com",
  projectId: "facebook-clone-f69a8",
  storageBucket: "facebook-clone-f69a8.appspot.com",
  messagingSenderId: "70660178422",
  appId: "1:70660178422:web:2e206eb375acc39c4b47d7",
  measurementId: "G-56DMH592MV"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;