import React from 'react';
import { Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const ProtectedRoute = ({ children, requireAdmin = false, requireUser = false }) => {
  const { isLoggedIn, userType, isAdmin } = useApp();

  // If admin access is required
  if (requireAdmin) {
    if (!isLoggedIn || !isAdmin || userType !== 'admin') {
      return <Navigate to="/admin/login" replace />;
    }
  }

  // If user access is required (but not admin)
  if (requireUser) {
    if (!isLoggedIn || userType !== 'user') {
      return <Navigate to="/login" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
