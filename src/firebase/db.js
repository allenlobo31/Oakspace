import { getFirestore, doc, setDoc, getDoc, collection, addDoc, onSnapshot } from "firebase/firestore";
import app from "./config";

export const db = getFirestore(app);

// Add product
export const addProduct = async (product) => {
  await addDoc(collection(db, "products"), product);
};

// Get all products
export const getProducts = (callback) => {
  return onSnapshot(collection(db, "products"), (snapshot) => {
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(data);
  });
};

// Add user with role
export const addUserWithRole = async (uid, email, role = "user") => {
  await setDoc(doc(db, "users", uid), { email, role });
};

// Get user role
export const getUserRole = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data().role : null;
};
