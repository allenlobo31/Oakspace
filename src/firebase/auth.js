import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Email signup
export const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// Email login
export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Google login
export const googleLogin = () => signInWithPopup(auth, provider);

// Logout
export const logoutUser = () => signOut(auth);

export default auth;
