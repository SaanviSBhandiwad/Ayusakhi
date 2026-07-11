import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export const checkUserProfileExists = async (uid: string) => {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists();
};
