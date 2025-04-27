import { Navigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
  const isAdmin = localStorage.getItem("admin_token");
  return isAdmin ? children : <Navigate to="/" />;
};

export default AdminProtected;
