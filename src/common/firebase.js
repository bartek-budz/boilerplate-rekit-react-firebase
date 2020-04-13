// core Firebase SDK must be listed before other Firebase SDKs
var firebase = require("firebase/app");
// add the Firebase products that you want to use
require("firebase/auth");

let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

export const Firebase = firebase.initializeApp(firebaseConfig)

export function getAuthPersistence(remember) {
  return remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION
}

export function addAuthStateListener(listener) {
  firebase.auth().onAuthStateChanged(listener)
}