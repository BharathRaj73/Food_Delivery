import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6lk-MAFA3Uscb1VMDmyoAXHql4qx9Ja4",
  authDomain: "restaurant-react-9b680.firebaseapp.com",
  databaseURL: "https://restaurant-react-9b680-default-rtdb.firebaseio.com",
  projectId: "restaurant-react-9b680",
  storageBucket: "restaurant-react-9b680.appspot.com",
  messagingSenderId: "538745047966",
  appId: "1:538745047966:web:2a90fd89011d594f97a48f",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, getFirestore, storage };
