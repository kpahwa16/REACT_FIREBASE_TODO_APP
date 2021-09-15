import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const firebaseApp = firebase.initializeApp(
    {
            apiKey: "AIzaSyAaNL93zA_aE3Y4fIc7HLYb2GajBI0-vKc",
            authDomain: "todo-app-khushbu.firebaseapp.com",
            projectId: "todo-app-khushbu",
            storageBucket: "todo-app-khushbu.appspot.com",
            messagingSenderId: "317146962326",
            appId: "1:317146962326:web:6b2d11f652ac76e76665b7",
            measurementId: "G-TYCR7S84CZ"
    }
        

);


const db = firebaseApp.firestore();

export default db;