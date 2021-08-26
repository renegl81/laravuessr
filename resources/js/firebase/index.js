/**
 * Firebase Login
 * Vuely comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/messaging'
import 'firebase/firestore';

// Initialize Firebase
const config = {
    apiKey: "", // Your Api key will be here
    authDomain: "", // Your auth domain
    databaseURL: "", // data base url
    projectId: "", // project id
    storageBucket: "", // storage bucket
    messagingSenderId: "", // messaging sender id
    appId: "",
    measurementId: ""
};

//const firebaseApp  = firebase.initializeApp(config);


export {
    /*auth,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    database,*/
};
