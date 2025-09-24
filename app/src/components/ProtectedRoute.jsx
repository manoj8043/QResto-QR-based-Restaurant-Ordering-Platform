import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/staff-login" replace />; // Redirect before rendering
  }

  return children; // Render the protected page
};

export default ProtectedRoute;
