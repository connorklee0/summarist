"use client";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import styles from "./LoginModal.module.css";
import {
  signUpUser,
  PlanType,
  loginWithGoogle,
} from "@/app/lib/api/authService";
import { useModal } from "@/app/context/ModalContext";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  selectedPlan?: PlanType;
}

export default function SignUpModal({
  isOpen,
  onClose,
  selectedPlan = "basic",
}: SignUpModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { openLoginModal } = useModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      await signUpUser(email, password, selectedPlan);
      setEmail("");
      setPassword("");
      onClose();
    } catch (error: any) {
      console.error("Sign up failed:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please login instead.");
      } else if (error.code === "auth/weak-password") {
        setError("Password must be at least 6 characters.");
      } else {
        setError(
          error.message || "Failed to create account. Please try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      await loginWithGoogle();
      onClose();
    } catch (error: any) {
      console.error("Google login failed:", error);
      if (error.code === "auth/popup-closed-by-user") {
        setError("Sign-in was cancelled.");
      } else if (error.code === "auth/popup-blocked") {
        setError("Pop-up was blocked. Please allow pop-ups for this site.");
      } else {
        setError("Failed to login with Google. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoCloseSharp size={24} />
        </button>

        <h2 className={styles.title}>Sign up to Summarist</h2>

        <button
          className={styles.googleButton}
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          <div className="text-3xl bg-white rounded absolute left-1">
            <FcGoogle />
          </div>
          {isLoading ? "Logging in..." : "Login with Google"}
        </button>

        <div className={styles.separator}>
          <span>or</span>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password (at least 6 characters)
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="Password"
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className={styles.footer}>
          <button onClick={openLoginModal} className={styles.link}>
            Already have an account?
          </button>
        </p>
      </div>
    </div>
  );
}
