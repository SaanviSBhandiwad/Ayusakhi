import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const OnboardingRoute = ({ children }: { children: JSX.Element }) => {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    const check = async () => {
      const user = auth.currentUser;
      if (!user) return setAllowed(false);

      const snap = await getDoc(doc(db, "users", user.uid));
      if (!snap.exists()) return setAllowed(false);

      setAllowed(snap.data().onboardingCompleted === true);
    };

    check();
  }, []);

  if (allowed === null) return null;
  return allowed ? children : <Navigate to="/user-details" replace />;
};

export default OnboardingRoute;
