import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { addProduct as addProductToFirebase, getProducts, updateProduct as updateProductInFirebase, deleteProduct as deleteProductFromFirebase } from '../firebase/db';

// Initial state (no hardcoded products)
const initialState = {
  products: [],
  cart: [],
  user: null,
  isAdmin: false,
  isLoggedIn: false,
  userType: null,
  searchQuery: '',
  selectedCategory: 'All',
  loading: false,
  error: null
};

// Action types
export const ACTIONS = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  SET_PRODUCTS: 'SET_PRODUCTS',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY: 'UPDATE_CART_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  SET_USER: 'SET_USER',
  LOGOUT: 'LOGOUT',
  SET_ADMIN: 'SET_ADMIN',
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_ADMIN: 'LOGIN_ADMIN',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_SELECTED_CATEGORY: 'SET_SELECTED_CATEGORY',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR'
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
      
    case ACTIONS.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        )
      };
      
    case ACTIONS.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
      
    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
      
    case ACTIONS.ADD_TO_CART:
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
      
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
      
    case ACTIONS.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };
      
    case ACTIONS.CLEAR_CART:
      return {
        ...state,
        cart: []
      };
      
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload
      };
      
    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAdmin: false,
        isLoggedIn: false,
        userType: null,
        cart: []
      };
      
    case ACTIONS.SET_ADMIN:
      return {
        ...state,
        isAdmin: action.payload
      };
      
    case ACTIONS.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        userType: 'user',
        isAdmin: false
      };
      
    case ACTIONS.LOGIN_ADMIN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        userType: 'admin',
        isAdmin: true
      };
      
    case ACTIONS.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
      
    case ACTIONS.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };
      
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
      
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
      
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // ✅ Load products from Firebase on mount
  useEffect(() => {
    const unsubscribe = getProducts((products) => {
      dispatch({ type: ACTIONS.SET_PRODUCTS, payload: products });
    });

    return () => unsubscribe();
  }, []);

  // Load cart and user from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('furnitureCart');
    const savedUser = localStorage.getItem('furnitureUser');
    
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        cartItems.forEach(item => {
          dispatch({ type: ACTIONS.ADD_TO_CART, payload: item });
        });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }

    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        if (userData.userType === 'admin') {
          dispatch({ type: ACTIONS.LOGIN_ADMIN, payload: userData });
        } else {
          dispatch({ type: ACTIONS.LOGIN_USER, payload: userData });
        }
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('furnitureCart', JSON.stringify(state.cart));
  }, [state.cart]);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (state.user && state.isLoggedIn) {
      localStorage.setItem('furnitureUser', JSON.stringify({
        ...state.user,
        userType: state.userType
      }));
    } else {
      localStorage.removeItem('furnitureUser');
    }
  }, [state.user, state.isLoggedIn, state.userType]);

  // ✅ Fixed: Add product to Firebase AND local state
  const addProduct = async (product) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      await addProductToFirebase(product);
      // Firebase listener will automatically update state
      dispatch({ type: ACTIONS.SET_ERROR, payload: null });
    } catch (error) {
      console.error('Error adding product:', error);
      dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to add product' });
      throw error;
    } finally {
      dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    }
  };

  // ✅ Fixed: Update product in Firebase AND local state
  const updateProduct = async (product) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      await updateProductInFirebase(product.id, product);
      // Firebase listener will automatically update state
      dispatch({ type: ACTIONS.SET_ERROR, payload: null });
    } catch (error) {
      console.error('Error updating product:', error);
      dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to update product' });
      throw error;
    } finally {
      dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    }
  };

  // ✅ Fixed: Delete product from Firebase AND local state
  const deleteProduct = async (productId) => {
    try {
      dispatch({ type: ACTIONS.SET_LOADING, payload: true });
      await deleteProductFromFirebase(productId);
      // Firebase listener will automatically update state
      dispatch({ type: ACTIONS.SET_ERROR, payload: null });
    } catch (error) {
      console.error('Error deleting product:', error);
      dispatch({ type: ACTIONS.SET_ERROR, payload: 'Failed to delete product' });
      throw error;
    } finally {
      dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    }
  };

  const addToCart = (product) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId });
  };

  const updateCartQuantity = (productId, quantity) => {
    dispatch({ type: ACTIONS.UPDATE_CART_QUANTITY, payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  };

  const setUser = (user) => {
    dispatch({ type: ACTIONS.SET_USER, payload: user });
  };

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    localStorage.removeItem('furnitureUser');
    localStorage.removeItem('furnitureCart');
  };

  const setAdmin = (isAdmin) => {
    dispatch({ type: ACTIONS.SET_ADMIN, payload: isAdmin });
  };

  const loginUser = (userData) => {
    dispatch({ type: ACTIONS.LOGIN_USER, payload: userData });
  };

  const loginAdmin = (adminData) => {
    dispatch({ type: ACTIONS.LOGIN_ADMIN, payload: adminData });
  };

  const setSearchQuery = (query) => {
    dispatch({ type: ACTIONS.SET_SEARCH_QUERY, payload: query });
  };

  const setSelectedCategory = (category) => {
    dispatch({ type: ACTIONS.SET_SELECTED_CATEGORY, payload: category });
  };

  // Computed values
  const cartTotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  const filteredProducts = state.products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesCategory = state.selectedCategory === 'All' || product.category === state.selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(state.products.map(product => product.category))];

  const value = {
    ...state,
    cartTotal,
    cartItemsCount,
    filteredProducts,
    categories,
    addProduct,
    updateProduct,
    deleteProduct,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    setUser,
    logout,
    setAdmin,
    loginUser,
    loginAdmin,
    setSearchQuery,
    setSelectedCategory
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;