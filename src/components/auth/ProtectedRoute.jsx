// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

/**
 * ProtectedRoute Component - Protects routes that require authentication
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Optional children to render instead of Outlet
 * @param {string} props.redirectTo - Path to redirect to if not authenticated (default: '/login')
 * @returns {JSX.Element} The protected route
 */
const ProtectedRoute = ({ 
  children, 
  redirectTo = '/login' 
}) => {
  const { user, loading } = useUser();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  // If authenticated, render children or Outlet (for nested routes)
  return children ? children : <Outlet />;
};

export default ProtectedRoute;