import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDDvCnqg8AJumTHkLFo0_dFrhiia_8quDk",
    authDomain: "netflix-clone-4dcea.firebaseapp.com",
    projectId: "netflix-clone-4dcea",
    storageBucket: "netflix-clone-4dcea.appspot.com",
    messagingSenderId: "996976885843",
    appId: "1:996976885843:web:ca76c199b45c371fe986a6"
  };

const firebaseApp=initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
const auth=getAuth(firebaseApp);

export { auth };
export default db;