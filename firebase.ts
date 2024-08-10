// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0CHw76cv6l3dMkf1v9MALXyWLm3_GCfM",
    authDomain: "easycv-68dc3.firebaseapp.com",
    projectId: "easycv-68dc3",
    storageBucket: "easycv-68dc3.appspot.com",
    messagingSenderId: "336718481256",
    appId: "1:336718481256:web:43e8af86c84b6a44b3b8dd",
    measurementId: "G-E3X4SQWRPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

//test

import { addDoc, collection } from "firebase/firestore";

export async function addDocTest() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function getDocTest() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}
