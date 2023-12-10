import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ isUserAuthenticated, children }) => {
  if (isUserAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRouter;
