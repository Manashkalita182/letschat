import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
apiKey: "AIzaSyC9KjNh0lEGQMyCJrfw4os0LT5FQLsk_MY",
authDomain: "lets-chat-5b19d.firebaseapp.com",
projectId: "lets-chat-5b19d",
storageBucket: "lets-chat-5b19d.firebasestorage.app",
messagingSenderId: "700730293218",
appId: "1:700730293218:web:2258ec0ec73256befc97bb",
measurementId: "G-B5SWRM0VYF",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);