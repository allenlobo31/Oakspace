// import { getFirestore, doc, setDoc, getDoc, collection, addDoc, onSnapshot } from "firebase/firestore";
// import app from "./config";

// export const db = getFirestore(app);

// // Add product
// export const addProduct = async (product) => {
//   await addDoc(collection(db, "products"), product);
// };

// // Get all products
// export const getProducts = (callback) => {
//   return onSnapshot(collection(db, "products"), (snapshot) => {
//     const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     callback(data);
//   });
// };

// // Add user with role
// export const addUserWithRole = async (uid, email, role = "user") => {
//   await setDoc(doc(db, "users", uid), { email, role });
// };

// // Get user role
// export const getUserRole = async (uid) => {
//   const docRef = doc(db, "users", uid);
//   const docSnap = await getDoc(docRef);
//   return docSnap.exists() ? docSnap.data().role : null;
// };

import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc, 
  updateDoc,
  deleteDoc,
  onSnapshot 
} from "firebase/firestore";
import app from "./config";

export const db = getFirestore(app);

// Add product to Firebase
export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      ...product,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    console.log("Product added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Update product in Firebase
export const updateProduct = async (productId, productData) => {
  try {
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, {
      ...productData,
      updatedAt: new Date().toISOString()
    });
    console.log("Product updated:", productId);
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Delete product from Firebase
export const deleteProduct = async (productId) => {
  try {
    const productRef = doc(db, "products", productId);
    await deleteDoc(productRef);
    console.log("Product deleted:", productId);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

// Get all products with real-time updates
export const getProducts = (callback) => {
  return onSnapshot(
    collection(db, "products"), 
    (snapshot) => {
      const data = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      }));
      callback(data);
    },
    (error) => {
      console.error("Error fetching products:", error);
    }
  );
};

// Add user with role
export const addUserWithRole = async (uid, email, role = "user") => {
  try {
    await setDoc(doc(db, "users", uid), { 
      email, 
      role,
      createdAt: new Date().toISOString()
    });
    console.log("User added with role:", role);
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

// Get user role
export const getUserRole = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data().role : null;
  } catch (error) {
    console.error("Error getting user role:", error);
    return null;
  }
};