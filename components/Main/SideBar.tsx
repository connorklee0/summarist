"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../public/home/logo.png";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { RiBallPenLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { TbHelp } from "react-icons/tb";
import { RxExit, RxBookmark } from "react-icons/rx";
import SidebarItem from "../ui/SidebarItem";
import FontChange from "../ui/FontChange";
import { logoutUser } from "@/app/lib/api/authService";
import { useAuth } from "@/app/context/AuthContext";
import { useModal } from "@/app/context/ModalContext";

const SideBar = () => {
  const pathname = usePathname();
  const isPlayerPage = pathname.startsWith("/player");
  const { user, userData } = useAuth();
  const { openLoginModal } = useModal();

  return (
    <div className="w-50 min-w-50 text-black bg-[#e5e4e4]">
      <div className="max-w-40 h-15 mx-auto pt-5">
        <Image src={Logo} alt="Logo" />
      </div>
      <div
        className={`flex flex-col justify-between py-8 overflow-auto h-[calc(100vh-80px)] ${
          isPlayerPage && "pb-25"
        }`}
      >
        <div>
          <ul>
            <SidebarItem
              href="/for-you"
              icon={<AiOutlineHome />}
              label="For You"
              disabled={false}
            />
            <SidebarItem
              href="/library"
              icon={<RxBookmark />}
              label="My Library"
              disabled={true}
            />
            <SidebarItem
              icon={<RiBallPenLine />}
              label="Highlights"
              disabled={true}
            />
            <SidebarItem
              icon={<IoIosSearch />}
              label="Search"
              disabled={true}
            />
            {isPlayerPage && <FontChange />}
          </ul>
        </div>
        <div>
          <ul>
            <SidebarItem
              href="/settings"
              icon={<AiOutlineSetting />}
              label="Settings"
            />
            <SidebarItem
              icon={<TbHelp />}
              label="Help & Support"
              disabled={true}
            />
            <div
              onClick={() => {
                {
                  !user || !userData ? openLoginModal() : logoutUser();
                }
              }}
            >
              <SidebarItem
                href=""
                icon={<RxExit />}
                label={!user || !userData ? "Login" : "Logout"}
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
