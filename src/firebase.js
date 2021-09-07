import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSaSING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

const fireStore = app.firestore() // Firebase firestore
export const database = {
    folders : fireStore.collection("folders"), // Getting only folders
    files : fireStore.collection("files"), // Getting only files
    formatDoc : doc => {
        return { id:doc.id, ...doc.data()}
    },
    getCurrentTimestamp : firebase.firestore.FieldValue.serverTimestamp // Getting when folder created
}

export const auth = app.auth()  // Firebase Auth
export default app