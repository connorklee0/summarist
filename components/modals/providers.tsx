"use client";
import { createContext, useState } from "react";
import LoginModal from "./LoginModal";

export interface ModalContextType {
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  handleLogin: (email: string, password: string) => Promise<void>;
}

export const ModalContext = createContext<ModalContextType>({
  isLoginModalOpen: false,
  openLoginModal: () => {},
  closeLoginModal: () => {},
  handleLogin: async () => {},
});

export default function ModalProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const handleLogin = async (email: string, password: string) => {
    // Add your login logic here
    console.log("Login attempt:", { email, password });
    // Example: call your API endpoint
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    // });
  };

  return (
    <ModalContext.Provider
      value={{ isLoginModalOpen, openLoginModal, closeLoginModal, handleLogin }}
    >
      {children}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onSubmit={handleLogin}
      />
    </ModalContext.Provider>
  );
}
