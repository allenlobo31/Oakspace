import React from 'react';
import { Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const ProtectedRoute = ({ children, requireAdmin = false, requireUser = false }) => {
  const { isLoggedIn, userType, isAdmin } = useApp();

  // 🔍 DEBUG LOGS - Remove these after fixing
  console.log('🔒 ProtectedRoute Check:');
  console.log('   isLoggedIn:', isLoggedIn);
  console.log('   userType:', userType);
  console.log('   isAdmin:', isAdmin);
  console.log('   requireAdmin:', requireAdmin);
  console.log('   requireUser:', requireUser);

  // If admin access is required
  if (requireAdmin) {
    console.log('🔐 Admin access required...');
    
    if (!isLoggedIn) {
      console.log('❌ Not logged in - redirecting to /admin/login');
      return <Navigate to="/admin/login" replace />;
    }
    
    if (!isAdmin) {
      console.log('❌ isAdmin is false - redirecting to /admin/login');
      return <Navigate to="/admin/login" replace />;
    }
    
    if (userType !== 'admin') {
      console.log('❌ userType is not admin - redirecting to /admin/login');
      return <Navigate to="/admin/login" replace />;
    }
    
    console.log('✅ Admin access granted!');
  }

  // If user access is required (but not admin)
  if (requireUser) {
    console.log('🔐 User access required...');
    
    if (!isLoggedIn || userType !== 'user') {
      console.log('❌ Not authorized as user - redirecting to /login');
      return <Navigate to="/login" replace />;
    }
    
    console.log('✅ User access granted!');
  }

  return children;
};

export default ProtectedRoute;