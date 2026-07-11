import { auth } from "@/firebase";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  return auth.currentUser ? children : <Navigate to="/login" replace />;
};

export default AuthRoute;
