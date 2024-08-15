// FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANL-0xRUMzkT-Hn-wNitPPqzRdzeHHCRs",
  authDomain: "sports-webapp.firebaseapp.com",
  projectId: "sports-webapp",
  storageBucket: "sports-webapp.appspot.com",
  messagingSenderId: "457757293172",
  appId: "1:457757293172:web:cc78479c32a050a8266f21",
  measurementId: "G-3SEP87L7HF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
