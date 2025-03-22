import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAFx7BdahrJTfghVNrm71cqlPaXoJfvh4",
  authDomain: "olx-clone-d0840.firebaseapp.com",
  projectId: "olx-clone-d0840",
  storageBucket: "olx-clone-d0840.firebasestorage.app",
  messagingSenderId: "52218594217",
  appId: "1:52218594217:web:583c1e7890610596f87ab8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()