"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { hasPremiumAccess } from "../lib/api/authService";

export const useRouteProtection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, userData, loading } = useAuth();

  useEffect(() => {
    if (loading) return; // Wait for auth to load
    const currentPath = pathname;
    // User is logged in
    if (user && userData) {
      if (currentPath === "/") {
        // Logged in user trying to access home page → redirect to for-you
        router.replace("/for-you");
      } else if (currentPath === "/choose-plan") {
        // Check if user has premium access
        if (hasPremiumAccess(userData.plan)) {
          // Premium user trying to access choose-plan → redirect to for-you
          router.replace("/for-you");
        }
        // Basic plan users can stay on choose-plan page
      }
    }
  }, [user, userData, loading, router, pathname]);

  return { user, userData, loading };
};
