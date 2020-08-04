import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyACeyNcB2bACpbiprvskHlOxz1l_MnRV6U',
  authDomain: 'react-postit.firebaseapp.com',
  databaseURL: 'https://react-postit.firebaseio.com',
  projectId: 'react-postit',
  storageBucket: 'react-postit.appspot.com',
  messagingSenderId: '255219722126'
};
const fire = firebase.initializeApp(config);
export default fire;