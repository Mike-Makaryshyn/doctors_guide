import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc5lPMStYibi7N08bXA2ViSZbFLBk3PCc",
  authDomain: "germanmove-646fb.firebaseapp.com",
  projectId: "germanmove-646fb",
  storageBucket: "germanmove-646fb.firebasestorage.app",
  messagingSenderId: "671018983777",
  appId: "1:671018983777:web:c9efcf05f7d1d171ac2520",
  measurementId: "G-EMCZN5BH5E",
};

// Ініціалізуємо Firebase App
const app = initializeApp(firebaseConfig);

// Екземпляри Firebase Auth і Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Експортуємо auth і db
export { auth, db };