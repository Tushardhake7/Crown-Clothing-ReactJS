import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJsSHxKmD7MlF41vILBNwNntCfOETMIyI",
    authDomain: "crown-db-23549.firebaseapp.com",
    databaseURL: "https://crown-db-23549.firebaseio.com",
    projectId: "crown-db-23549",
    storageBucket: "crown-db-23549.appspot.com",
    messagingSenderId: "807566675408",
    appId: "1:807566675408:web:8871b91c550ca327f7fdd5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;