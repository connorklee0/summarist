"use client";
import Image from "next/image";
import Logo from "../../public/home/logo.png";
import { useModal } from "@/app/context/ModalContext";

const Nav = () => {
  const { openLoginModal } = useModal();
  return (
    <nav className="h-20 w-full flex justify-center">
      <div className="flex justify-between items-center w-full h-full px-6 mx-auto">
        <figure className="max-w-50 w-full">
          <Image className="w-full h-full" src={Logo} alt="logo" />
        </figure>
        <ul className="flex gap-6">
          <li
            className="text-[#032b41] transition-colors duration-100 cursor-pointer hover:text-[#2bd97c]"
            onClick={openLoginModal}
          >
            Login
          </li>
          <li className="cursor-not-allowed text-[#032b41] transition-colors duration-100 hidden sm:block">
            About
          </li>
          <li className="cursor-not-allowed text-[#032b41] transition-colors duration-100 hidden sm:block">
            Contact
          </li>
          <li className="cursor-not-allowed text-[#032b41] transition-colors duration-100 hidden sm:block">
            Help
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
