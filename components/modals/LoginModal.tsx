"use client";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./LoginModal.module.css";
import { loginUser, loginAsGuest } from "@/app/lib/api/authService";
import { useModal } from "@/app/context/ModalContext";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUpClick: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { openSignUpModal } = useModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await loginUser(email, password);
      setEmail("");
      setPassword("");
      onClose();
    } catch (error: any) {
      console.error("Login failed:", error);
      setError(
        error.message || "Failed to login. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      await loginAsGuest();
      onClose();
    } catch (error: any) {
      console.error("Guest login failed:", error);
      setError("Failed to login as guest. Please try again.");
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

        <h2 className={styles.title}>Log in to Summarist</h2>

        <button
          className={styles.guestButton}
          onClick={handleGuestLogin}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login as a Guest"}
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
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className={styles.footer}>
          Don't have an account?{" "}
          <button onClick={openSignUpModal} className={styles.link}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
