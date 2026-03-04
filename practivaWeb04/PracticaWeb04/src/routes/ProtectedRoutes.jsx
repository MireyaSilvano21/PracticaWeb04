import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/UContext";
const ProtectedRoutes = ({ children, role }) => {

  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  if (role && currentUser.role !== role) {
    return <Navigate to="/profile" />;
  }

  return children;
};

export default ProtectedRoutes;