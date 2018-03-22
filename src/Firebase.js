import * as firebase from 'firebase';

const config={
    apiKey: "AIzaSyBa_RfzzQAkdNLXEgbw22EhubG46LvSTiM",
    authDomain: "app-rextie.firebaseapp.com",
    databaseURL: "https://app-rextie.firebaseio.com",
    projectId: "app-rextie",
    storageBucket: "app-rextie.appspot.com",
    messagingSenderId: "842090789691"
};
firebase.initializeApp(config);

export const auth=firebase.auth();
export const googleProvider= new firebase.auth.GoogleAuthProvider();