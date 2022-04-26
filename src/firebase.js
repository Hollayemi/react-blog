import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { Firestore, getFirestore } from 'firebase/firestore'
import 'firebase/compat/storage'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDWhcMMn0MESbr8JB63VqjrAdzFt8MljjU",
  authDomain: "blogtesting-f8a98.firebaseapp.com",
  projectId: "blogtesting-f8a98",
  storageBucket: "blogtesting-f8a98.appspot.com",
  messagingSenderId: "327554244372",
  appId: "1:327554244372:web:cde5c8c9033f70eff7ac01"
  });

export const auth = app.auth()
export const db = getFirestore(app)
export const storage = firebase.storage()
export const fireSt = firebase.firestore()

export default app