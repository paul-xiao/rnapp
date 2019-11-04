import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBONNeeTvb6fNbrn8pZ_1sPmDUVjaMm3pw",
    authDomain: "test-39012.firebaseapp.com",
    databaseURL: "https://test-39012.firebaseio.com",
    projectId: "test-39012",
    storageBucket: "",
    messagingSenderId: "377823902565",
    appId: "1:377823902565:web:7f222f5c4637f2c9"
  };

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const storage = firebase.storage();