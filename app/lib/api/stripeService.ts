import { db } from "@/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { User } from "firebase/auth";

// Your Stripe publishable key (test mode)
export const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51SuhI22XspzkbURA6ptGKQN1JbEzTbnYAJ5HmaDvxHP6etM7e47rCgZ9OkclYAw27hARrctR7iZcaV0GV5nZdhSR00Xo2FnssH";

// Price IDs from Stripe (test mode)
export const PRICE_IDS = {
  premium: "price_1SuxNU2XspzkbURA0r3IRmoL", // $9.99/month
  "premium-plus": "price_1SuxN42XspzkbURAa4b10kbz", // $99.99/year
};

export interface CheckoutSessionData {
  mode: "subscription";
  price: string;
  success_url: string;
  cancel_url: string;
  trial_period_days?: number;
}

/**
 * Ensures customer document exists in Firestore
 */
const ensureCustomerDocument = async (user: User): Promise<void> => {
  const customerDocRef = doc(db, "customers", user.uid);
  const customerDoc = await getDoc(customerDocRef);

  if (!customerDoc.exists()) {
    // Create customer document if it doesn't exist
    await setDoc(customerDocRef, {
      email: user.email,
      userId: user.uid,
    });
    console.log("Customer document created for user:", user.uid);
  }
};

/**
 * Creates a Stripe Checkout session for a subscription
 */
export const createCheckoutSession = async (
  user: User,
  priceId: string,
  successUrl: string = `${window.location.origin}/for-you`,
  cancelUrl: string = `${window.location.origin}/choose-plan`
): Promise<string> => {
  if (!user) {
    throw new Error("User must be logged in to create checkout session");
  }

  // Ensure customer document exists first
  await ensureCustomerDocument(user);

  // Reference to user's checkout sessions collection
  const checkoutSessionRef = collection(
    db,
    "customers",
    user.uid,
    "checkout_sessions"
  );

  // Create checkout session document
  const sessionData: CheckoutSessionData = {
    mode: "subscription",
    price: priceId,
    success_url: successUrl,
    cancel_url: cancelUrl,
  };

  // Add trial for premium-plus
  if (priceId === PRICE_IDS["premium-plus"]) {
    sessionData.trial_period_days = 7;
  }

  const docRef = await addDoc(checkoutSessionRef, sessionData);

  // Wait for the Cloud Function to create the checkout session URL
  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(
      docRef,
      (snap) => {
        const data = snap.data();
        if (data?.error) {
          unsubscribe();
          reject(new Error(data.error.message));
        }
        if (data?.url) {
          unsubscribe();
          resolve(data.url);
        }
      },
      (error) => {
        reject(error);
      }
    );

    // Timeout after 10 seconds
    setTimeout(() => {
      unsubscribe();
      reject(new Error("Checkout session creation timed out"));
    }, 10000);
  });
};

/**
 * Gets the user's active subscriptions
 */
export const getUserSubscriptions = async (userId: string) => {
  const subscriptionsRef = collection(db, "customers", userId, "subscriptions");
  const q = query(
    subscriptionsRef,
    where("status", "in", ["active", "trialing"])
  );

  try {
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return [];
  }
};

/**
 * Listens to subscription changes in real-time
 */
export const subscribeToUserSubscriptions = (
  userId: string,
  callback: (subscriptions: any[]) => void
) => {
  const subscriptionsRef = collection(db, "customers", userId, "subscriptions");
  const q = query(
    subscriptionsRef,
    where("status", "in", ["active", "trialing"])
  );

  return onSnapshot(q, (snapshot) => {
    const subscriptions = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(subscriptions);
  });
};

/**
 * Redirects user to Stripe Checkout
 */
export const redirectToCheckout = async (
  user: User,
  priceId: string
): Promise<void> => {
  try {
    const checkoutUrl = await createCheckoutSession(user, priceId);
    window.location.href = checkoutUrl;
  } catch (error) {
    console.error("Error redirecting to checkout:", error);
    throw error;
  }
};
