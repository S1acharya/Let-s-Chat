import firebase from 'firebase/app';
import "firebase/auth";

// we will export it as auth object
export const auth  = firebase.initializeApp({
    apiKey: "AIzaSyCdjrfPev4cTdmkBTuzZNzIlR0zvZY4aTY",
    authDomain: "let-s-chat-46f58.firebaseapp.com",
    projectId: "let-s-chat-46f58",
    storageBucket: "let-s-chat-46f58.appspot.com",
    messagingSenderId: "168417286878",
    appId: "1:168417286878:web:dd9195214aac63de6a404f"
  }).auth();