/* For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBTkp-yArt27n7Ew14YemeM3hzq6w8U5g8',
  authDomain: 'clone-2372a.firebaseapp.com',
  projectId: 'clone-2372a',
  storageBucket: 'clone-2372a.appspot.com',
  messagingSenderId: '552587186009',
  appId: '1:552587186009:web:ec9c21e90a55bbfa7bc648',
  measurementId: 'G-4QH4R87ZP0'
}
const app = initializeApp(firebaseConfig)
// const db = firestore(app)
const auth = getAuth(app)
export { auth }
*/
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_G1Lw63faRs0tS3MCCDmXXdwUGPyPqrM",
  authDomain: "clone-9a65d.firebaseapp.com",
  projectId: "clone-9a65d",
  storageBucket: "clone-9a65d.appspot.com",
  messagingSenderId: "1046649194954",
  appId: "1:1046649194954:web:bb87a4c236ea25e482e733",
  measurementId: "G-QM836RHKCT"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export { auth }
