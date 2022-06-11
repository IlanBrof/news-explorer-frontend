import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, component: Component, ...props }) => {

  return (
    <>
      {isLoggedIn ? (
        <Component {...props} isLoggedIn={isLoggedIn} />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ProtectedRoute;
