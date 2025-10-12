
// src/firebase/db.js
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  serverTimestamp,
  setDoc,
  getDoc,
  query,
  orderBy,
  where,
  getDocs
} from 'firebase/firestore';
import { db } from './config';

// ==================== PRODUCTS ====================

export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...product,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const getProducts = (callback) => {
  const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(products);
  });
};

export const updateProduct = async (productId, updatedProduct) => {
  try {
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    await deleteDoc(doc(db, 'products', productId));
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// ==================== USERS ====================

export const addUserWithRole = async (uid, email, role) => {
  try {
    await setDoc(doc(db, 'users', uid), {
      email,
      role,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

export const getUserRole = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      return userDoc.data().role;
    }
    return 'user';
  } catch (error) {
    console.error('Error getting user role:', error);
    return 'user';
  }
};

// ==================== ORDERS ====================

export const createOrder = async (orderData) => {
  try {
    const orderId = `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    
    await setDoc(doc(db, 'orders', orderId), {
      orderId: orderId,
      userId: orderData.userId,
      userEmail: orderData.userEmail,
      userName: orderData.userName,
      userPhone: orderData.userPhone,
      items: orderData.items,
      totalAmount: orderData.totalAmount,
      paymentId: orderData.paymentId,
      paymentStatus: orderData.paymentStatus || 'success',
      orderStatus: orderData.orderStatus || 'pending',
      address: orderData.address,
      createdAt: serverTimestamp()
    });

    return orderId;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const getOrders = (callback) => {
  const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const orders = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(orders);
  });
};

export const getUserOrders = (userId, callback) => {
  const q = query(
    collection(db, 'orders'), 
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  return onSnapshot(q, (snapshot) => {
    const orders = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(orders);
  });
};

export const getOrderById = async (orderId) => {
  try {
    const orderDoc = await getDoc(doc(db, 'orders', orderId));
    if (orderDoc.exists()) {
      return {
        id: orderDoc.id,
        ...orderDoc.data()
      };
    }
    throw new Error('Order not found');
  } catch (error) {
    console.error('Error getting order:', error);
    throw error;
  }
};

export const updateOrderStatus = async (orderId, status) => {
  try {
    const orderRef = doc(db, 'orders', orderId);
    await updateDoc(orderRef, {
      orderStatus: status,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
};

// ==================== NOTIFICATIONS ====================

export const createNotification = async (notificationData) => {
  try {
    const docRef = await addDoc(collection(db, 'notifications'), {
      type: notificationData.type || 'new_order',
      orderId: notificationData.orderId,
      message: notificationData.message,
      orderAmount: notificationData.orderAmount,
      customerName: notificationData.customerName,
      isRead: false,
      timestamp: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

export const getNotifications = (callback) => {
  const q = query(collection(db, 'notifications'), orderBy('timestamp', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const notifications = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(notifications);
  });
};

export const getUnreadNotificationsCount = (callback) => {
  const q = query(
    collection(db, 'notifications'), 
    where('isRead', '==', false)
  );
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.size);
  });
};

export const markNotificationAsRead = async (notificationId) => {
  try {
    const notificationRef = doc(db, 'notifications', notificationId);
    await updateDoc(notificationRef, {
      isRead: true
    });
  } catch (error) {
    console.error('Error marking notification as read:', error);
    throw error;
  }
};

export const markAllNotificationsAsRead = async () => {
  try {
    const q = query(
      collection(db, 'notifications'), 
      where('isRead', '==', false)
    );
    const snapshot = await getDocs(q);
    
    const updatePromises = snapshot.docs.map(document => 
      updateDoc(doc(db, 'notifications', document.id), { isRead: true })
    );
    
    await Promise.all(updatePromises);
  } catch (error) {
    console.error('Error marking all notifications as read:', error);
    throw error;
  }
};

export const deleteNotification = async (notificationId) => {
  try {
    await deleteDoc(doc(db, 'notifications', notificationId));
  } catch (error) {
    console.error('Error deleting notification:', error);
    throw error;
  }
};