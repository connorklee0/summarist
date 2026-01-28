"use client";
import { createContext, useState, useContext } from "react";
import LoginModal from "@/components/modals/LoginModal";
import SignUpModal from "@/components/modals/SignupModal";

export interface ModalContextType {
  isLoginModalOpen: boolean;
  isSignUpModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openSignUpModal: () => void;
  closeSignUpModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  openLoginModal: () => {},
  closeLoginModal: () => {},
  openSignUpModal: () => {},
  closeSignUpModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isLoginModalOpen,
        isSignUpModalOpen,
        openLoginModal,
        closeLoginModal,
        openSignUpModal,
        closeSignUpModal,
      }}
    >
      {children}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onSignUpClick={openSignUpModal}
      />
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={closeSignUpModal}
        onLoginClick={openLoginModal}
      />
    </ModalContext.Provider>
  );
}
