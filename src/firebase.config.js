import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyBUXaJzyBtemEQVPDvP7LJvokPwMrs_-O8',
  authDomain: 'aaren-house-marketplace-app.firebaseapp.com',
  projectId: 'aaren-house-marketplace-app',
  storageBucket: 'aaren-house-marketplace-app.appspot.com',
  messagingSenderId: '362203096531',
  appId: '1:362203096531:web:e68a8ac7e6b98852c97b26',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
