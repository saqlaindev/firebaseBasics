import logo from './logo.svg';
import React from 'react'
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut  } from "firebase/auth";
function App() {
  React.useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBEj3BNmuq-Mb635F5_gLRjSZKhuZLTHhM",
      authDomain: "reactapp-5e1a5.firebaseapp.com",
      databaseURL: "https://reactapp-5e1a5-default-rtdb.firebaseio.com",
      projectId: "reactapp-5e1a5",
      storageBucket: "reactapp-5e1a5.appspot.com",
      messagingSenderId: "764954787918",
      appId: "1:764954787918:web:d27368b62d3e3aa1cb831f"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
    //GET DATA form firebase
    // getschool(db)

    //ADD DATA  
    //adddoc(db)

    // DELETE DATA
    //deldoc(db)

    //Update document 
   // updatedoc(db)



// create use account
    // const auth = getAuth(app);
    //     createUserWithEmailAndPassword(auth, "maliksaqlain@gmail.com", "saqlain@82")
    //       .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         // ...
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log("no sigin in!")
    //         // ..
    //       });



// sigin with user email and password 
      // const auth = getAuth(app);
      // signInWithEmailAndPassword(auth, "maliksaqlainm308@gmail.com","Saqlain@82")
      //   .then((userCredential) => {
      //     // Signed in 
      //     const user = userCredential.user;
      //     console.log(user.email)
      //     // ...
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //   });

  //sigin with google
      // const provider = new GoogleAuthProvider();
      // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      // const auth = getAuth();
      // signInWithPopup(auth, provider)
      //   .then((result) => {
      //     // This gives you a Google Access Token. You can use it to access the Google API.
      //     const credential = GoogleAuthProvider.credentialFromResult(result);
      //     const token = credential.accessToken;
      //     // The signed-in user info.
      //     const user = result.user;
      //     console.log(token)
          
      //     // ...
      //   }).catch((error) => {
      //     // Handle Errors here.
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     // The email of the user's account used.
      //     const email = error.email;
      //     // The AuthCredential type that was used.
      //     const credential = GoogleAuthProvider.credentialFromError(error);
      //     // ...
      //   });
     
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log( "Sign-out successful")
    }).catch((error) => {
      // An error happened.
    });

  }, [])


  async function updatedoc(db) {


    // db , collectionName, document id that want to update!
    const Ref = doc(db, 'school', 'school2');
    await updateDoc(Ref, {
      title: "MA jinnah college 2"
    })
  }


  async function deldoc(db) {
    await deleteDoc(doc(db, "school", "school1"));
  }

  async function adddoc(db) {
    try {
      const docRef = await addDoc(collection(db, "school"), {
        title: "school3",
        desc: "Aps"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function getschool(db) {
    const schoolCol = collection(db, 'school');
    const docum = await getDocs(schoolCol);
    console.log(docum)
    const schoolList = docum.docs.map(doc => doc.data());
    console.log(schoolList)
    return schoolList;
  }
  return (
    <div className="App">
      <h1>use firestore and sdk</h1>
    </div>
  );
}

export default App;
