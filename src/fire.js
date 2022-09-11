import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCfCZ-JbtDignc6dB0Y8-3yPv6uzVYv5GY",
    authDomain: "darcs-a24a4.firebaseapp.com",
    projectId: "darcs-a24a4",
    storageBucket: "darcs-a24a4.appspot.com",
    messagingSenderId: "261712512597",
    appId: "1:261712512597:web:1416e2ec20c8ae22e976dc"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;