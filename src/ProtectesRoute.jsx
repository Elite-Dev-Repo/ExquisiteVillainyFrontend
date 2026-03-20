import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // No token? Back to login you go.
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
