import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyD08kTgR9kGbQwV_O_g6RWf3AqI6u0UiPg",
        authDomain: "final-project-9f410.firebaseapp.com",
        databaseURL: "https://final-project-9f410.firebaseio.com",
        projectId: "final-project-9f410",
        storageBucket: "final-project-9f410.appspot.com",
        messagingSenderId: "1025899233268",
        appId: "1:1025899233268:web:a294c9d882a2304aff83a1"


    }
    firebase.initializeApp(config)
    // firebase.firestore().settings({timestampsInSnapshots: true})
    // firebase.firestore().settings({
    //     timestampsInSnapshots: true
    // });

}
const db = firebase.database();
const storage = firebase.storage();
const fireDb = firebase.firestore();

export { fireDb, db, storage }