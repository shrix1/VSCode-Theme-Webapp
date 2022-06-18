import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // for form db
import { getFirestore } from "firebase/firestore"; // for form db
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // for auth/google provider
import { getAnalytics } from "firebase/analytics";
import { logEvent } from "firebase/analytics";

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
export const analytics = getAnalytics(app);
export const db = getDatabase(app); // for form db
export const dbReview = getFirestore(app); // for form db
export const auth = getAuth(app); // for auth
export const provider = new GoogleAuthProvider(); // google auth

logEvent(analytics, "notification_received");
logEvent(analytics, "user_gotIn");
