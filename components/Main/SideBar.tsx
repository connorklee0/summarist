import Image from "next/image";
import Logo from "../../public/home/logo.png";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { RiBallPenLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { TbHelp } from "react-icons/tb";
import { RxExit, RxBookmark } from "react-icons/rx";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="w-50 min-w-50 text-black">
      <div className="max-w-40 h-15 mx-auto pt-5">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-between py-8 overflow-auto h-[calc(100vh-80px)]">
        <div>
          <ul>
            <Link href={"/for-you"}>
              <li className="sidebar--item">
                <AiOutlineHome /> For You
              </li>
            </Link>
            <Link href={"/library"}>
              <li className="sidebar--item">
                <RxBookmark /> My Library
              </li>
            </Link>
            <li className="sidebar--item disabled">
              <RiBallPenLine /> Highlights
            </li>
            <li className="sidebar--item disabled">
              <IoIosSearch /> Search
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <Link href={"/settings"}>
              <li className="sidebar--item">
                <AiOutlineSetting />
                Settings
              </li>
            </Link>
            <li className="sidebar--item disabled">
              <TbHelp /> Help & Support
            </li>
            <li className="sidebar--item">
              <RxExit />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
