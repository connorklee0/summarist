"use client";

import Image from "next/image";
import { useModal } from "@/app/context/ModalContext";
import Login from "@/public/main/login.png";

interface LoginDisplayProps {
  description: string;
}

export default function LoginDisplay({ description }: LoginDisplayProps) {
  const { openLoginModal } = useModal();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-100 h-full">
        <Image src={Login} alt="Login" />
      </div>
      <div className="text-xl font-bold mb-4">{description}</div>
      <div>
        <button className="btn" onClick={() => openLoginModal()}>
          Login
        </button>
      </div>
    </div>
  );
}
