// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBEj3BNmuq-Mb635F5_gLRjSZKhuZLTHhM",
  authDomain: "reactapp-5e1a5.firebaseapp.com",
  databaseURL: "https://reactapp-5e1a5-default-rtdb.firebaseio.com",
  projectId: "reactapp-5e1a5",
  storageBucket: "reactapp-5e1a5.appspot.com",
  messagingSenderId: "764954787918",
  appId: "1:764954787918:web:d27368b62d3e3aa1cb831f"
};

// Initialize App
firebase.initializeApp(firebaseConfig)

export default firebase;