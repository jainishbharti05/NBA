import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB43xUkdQM47SmYfahKj58BCaCCsDRLBIw",
    authDomain: "nba-fullstack-1fc95.firebaseapp.com",
    databaseURL: "https://nba-fullstack-1fc95.firebaseio.com",
    projectId: "nba-fullstack-1fc95",
    storageBucket: "nba-fullstack-1fc95.appspot.com",
    messagingSenderId: "813628395135",
    appId: "1:813628395135:web:5e9a6e9e90d67aee95b94a",
    measurementId: "G-LMV3Y3XMDK"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseVideos = firebaseDB.ref('videos');
const firebaseTeams = firebaseDB.ref('teams');


const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}