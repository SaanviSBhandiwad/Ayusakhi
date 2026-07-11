import { auth } from "@/firebase";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = auth.currentUser;
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
