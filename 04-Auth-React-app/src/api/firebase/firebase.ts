import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA4c_AdXy0wgMzhFBXHK9RFjAZ_68QbmDI',
  authDomain: 'itransition-task4-auth-app.firebaseapp.com',
  databaseURL:
    'https://itransition-task4-auth-app-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'itransition-task4-auth-app',
  storageBucket: 'itransition-task4-auth-app.appspot.com',
  messagingSenderId: '703453506135',
  appId: '1:703453506135:web:1da1f63f662853e9a01112',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
