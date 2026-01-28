"use client";
import { useModal } from "@/app/context/ModalContext";

const Auth = () => {
  const { openLoginModal } = useModal();

  return <button onClick={openLoginModal}>Login</button>;
};

export default Auth;
