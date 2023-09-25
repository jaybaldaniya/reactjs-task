import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMpQuNgBjqnyDPBi7UvG2k6AykqHTqFww",
  authDomain: "react-test-task-70be8.firebaseapp.com",
  projectId: "react-test-task-70be8",
  storageBucket: "react-test-task-70be8.appspot.com",
  messagingSenderId: "123352240448",
  appId: "1:123352240448:web:ca7e672b05d48fcb092aa5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
