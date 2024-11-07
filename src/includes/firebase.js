import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDN2R0FrtonJbCaT5VSxpa_2zUV73fu0i8',
  authDomain: 'music-9be57.firebaseapp.com',
  projectId: 'music-9be57',
  storageBucket: 'music-9be57.appspot.com',
  appId: '1:364851802816:web:121526e828b1f700057325'
}
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, usersCollection }
