"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { getUserSubscriptions } from "@/app/lib/api/stripeService";
import { updateUserPlan } from "@/app/lib/api/authService";

export default function SubscriptionChecker() {
  const { user, userData, refreshUserData } = useAuth();
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const checkAndUpdateSubscription = async () => {
      if (!user || !userData) return;

      // Only check if user has basic plan (might have just completed payment)
      if (userData.plan === "basic") {
        setIsChecking(true);

        try {
          // Wait a moment for webhook to process
          await new Promise((resolve) => setTimeout(resolve, 2000));

          // Check for active subscriptions
          const subscriptions = await getUserSubscriptions(user.uid);

          if (subscriptions.length > 0) {
            const activeSubscription = subscriptions[0];
            const role =
              activeSubscription.role ||
              activeSubscription.metadata?.firebaseRole;

            console.log(role);

            if (role && role !== "basic") {
              // Update user's plan
              await updateUserPlan(user.uid, role);

              // Refresh user data
              await refreshUserData();
            }
          }
        } catch (error) {
          console.error("Error checking subscription:", error);
        } finally {
          setIsChecking(false);
        }
      }
    };

    checkAndUpdateSubscription();
  }, [user, userData, refreshUserData]);

  // Show activation message if checking
  if (isChecking) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          <p className="text-blue-800">Checking your subscription...</p>
        </div>
      </div>
    );
  }

  return null;
}
