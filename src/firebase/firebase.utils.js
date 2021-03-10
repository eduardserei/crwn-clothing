import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXAF-s3uVLpD81gUZU203aNlkkKr9gLQg",
    authDomain: "crwn-db-71c2a.firebaseapp.com",
    projectId: "crwn-db-71c2a",
    storageBucket: "crwn-db-71c2a.appspot.com",
    messagingSenderId: "564389866312",
    appId: "1:564389866312:web:4bb4eca1e865d912f3217d",
    measurementId: "G-K20VX2TBW4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;