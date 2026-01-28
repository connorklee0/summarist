import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";

export type PlanType = "basic" | "premium" | "premium-plus";

export const hasPremiumAccess = (plan: PlanType): boolean => {
  return plan === "premium" || plan === "premium-plus";
};

export interface UserData {
  uid: string;
  email: string;
  plan: PlanType;
}

// Sign up new user
export const signUpUser = async (
  email: string,
  password: string,
  plan: PlanType
): Promise<UserData> => {
  // Create user in Firebase Auth
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  // Create user document in Firestore
  const userData: UserData = {
    uid: user.uid,
    email: user.email || email,
    plan,
  };

  await setDoc(doc(db, "users", user.uid), userData);

  return userData;
};

// Login user
export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

// Login as guest
export const loginAsGuest = async (): Promise<User> => {
  const guestEmail = "guest@email.com";
  const guestPassword = "guest123";

  const userCredential = await signInWithEmailAndPassword(
    auth,
    guestEmail,
    guestPassword
  );
  return userCredential.user;
};

// Logout user
export const logoutUser = async (): Promise<void> => {
  await signOut(auth);
};

// Get user data from Firestore
export const getUserData = async (uid: string): Promise<UserData | null> => {
  const userDoc = await getDoc(doc(db, "users", uid));

  if (userDoc.exists()) {
    return userDoc.data() as UserData;
  }

  return null;
};

// Update user plan
export const updateUserPlan = async (
  uid: string,
  plan: PlanType
): Promise<void> => {
  await setDoc(doc(db, "users", uid), { plan }, { merge: true });
};
