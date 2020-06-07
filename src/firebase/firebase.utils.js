import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDIAUA_csebyDEZUhBGZczwxfbZFAiBl1U',
  authDomain: 'ecommerce-db-67865.firebaseapp.com',
  databaseURL: 'https://ecommerce-db-67865.firebaseio.com',
  projectId: 'ecommerce-db-67865',
  storageBucket: 'ecommerce-db-67865.appspot.com',
  messagingSenderId: '784163721386',
  appId: '1:784163721386:web:2c8d52c94bd1b3c1f440d3',
  measurementId: 'G-LR787T4Y96',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
