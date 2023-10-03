import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

// Initialize Firebase app

const firebaseConfig = {
  apiKey: 'AIzaSyAZclk06CRw-msssNmryCa4C2N2v9Xpu7Y',
  authDomain: 'fir-storge.firebaseapp.com',
  databaseURL: 'https://fir-storge.firebaseio.com',
  projectId: 'fir-storge',
  storageBucket: 'fir-storge.appspot.com',
  messagingSenderId: '157648006171',
  appId: '1:157648006171:web:f5040088d887cde40e1cbe',
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Storage

export const storage = getStorage(firebaseApp);
