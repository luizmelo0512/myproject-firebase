
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC4O79673ibCdUIQircCoxEY5jwObkjvlw",
    authDomain: "meu-projeto-ba2a3.firebaseapp.com",
    projectId: "meu-projeto-ba2a3",
    storageBucket: "meu-projeto-ba2a3.appspot.com",
    messagingSenderId: "450432013760",
    appId: "1:450432013760:web:a82e4b889d7968a802e425"
};

const firebaseDB = initializeApp(firebaseConfig);


export default firebaseDB;
