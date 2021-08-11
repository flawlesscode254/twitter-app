
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDaBtkkG92b48XQdVyDthG9mC_iPQ-rVW8",
    authDomain: "twitter-77dc4.firebaseapp.com",
    projectId: "twitter-77dc4",
    storageBucket: "twitter-77dc4.appspot.com",
    messagingSenderId: "679028010332",
    appId: "1:679028010332:web:4813bc4d542ebca4522599"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore()
const auth = firebase.auth()

export default db
export { auth }