import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAwtArPHvmbNAg5BLZ0ycPWglmeWm8jdcE",
  authDomain: "miniproject-db-f36f1.firebaseapp.com",
  databaseURL: "https://miniproject-db-f36f1-default-rtdb.firebaseio.com",
  projectId: "miniproject-db-f36f1",
  storageBucket: "miniproject-db-f36f1.appspot.com",
  messagingSenderId: "21070936049",
  appId: "1:21070936049:web:1105c218b4720c6f7bb650",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
