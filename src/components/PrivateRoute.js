import { Navigate, useLocation } from "react-router-dom";

import React from "react";

import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  console.log();
  console.log("location in private", user);
  if (!user) {
    // if not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  return children;
}
