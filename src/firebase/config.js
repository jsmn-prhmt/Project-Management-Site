import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyApkzd_qTlaIi9xWtxc9r7uObUoz6R4qhc",
  authDomain: "project-management-site-9a0cb.firebaseapp.com",
  projectId: "project-management-site-9a0cb",
  storageBucket: "project-management-site-9a0cb.appspot.com",
  messagingSenderId: "981187653435",
  appId: "1:981187653435:web:499393fda71ac88b9f911e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }