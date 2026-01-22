import Image from "next/image";
import Logo from "../../public/home/logo.png";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { RiBallPenLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { TbHelp } from "react-icons/tb";
import { RxExit, RxBookmark } from "react-icons/rx";
import SidebarItem from "../ui/SidebarItem";

const SideBar = () => {
  function logout() {
    return;
  }
  return (
    <div className="w-50 min-w-50 text-black bg-[#e5e4e4]">
      <div className="max-w-40 h-15 mx-auto pt-5">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-between py-8 overflow-auto h-[calc(100vh-80px)]">
        <div>
          <ul>
            <SidebarItem
              href="/for-you"
              icon={<AiOutlineHome />}
              label="For You"
            />
            <SidebarItem
              href="/library"
              icon={<RxBookmark />}
              label="My Library"
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
            <div onClick={logout()}>
              <SidebarItem href="" icon={<RxExit />} label="Logout" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
