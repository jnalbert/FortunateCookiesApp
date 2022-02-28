import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';


import Constants from 'expo-constants';

// Initialize Firebase

const firebaseConfig = {
  apiKey: Constants?.manifest?.extra?.apiKey,
  authDomain: Constants?.manifest?.extra?.authDomain,
  projectId: Constants?.manifest?.extra?.projectId,
  storageBucket: Constants?.manifest?.extra?.storageBucket,
  messagingSenderId: Constants?.manifest?.extra?.messagingSenderId,
  appId: Constants?.manifest?.extra?.appId
};


let Firebase;


if (firebase.getApps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig)
}


export const FirebaseAll = Firebase
export const Auth = getAuth(FirebaseAll)



