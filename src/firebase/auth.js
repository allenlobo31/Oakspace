import { getAuth, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google login
export const googleLogin = () => signInWithPopup(auth, provider);

// Logout
export const logoutUser = () => signOut(auth);

export default auth;