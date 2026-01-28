"use client";
import { useModal } from "../app/hooks/useModal";

const Auth = () => {
  const { openLoginModal } = useModal();

  return <button onClick={openLoginModal}>Login</button>;
};

export default Auth;
