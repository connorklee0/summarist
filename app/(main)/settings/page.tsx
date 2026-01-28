"use client";

import { useAuth } from "@/app/context/AuthContext";
import Login from "@/public/main/login.png";
import Image from "next/image";
import { useModal } from "@/app/hooks/useModal";
import { useRouter } from "next/navigation";

const page = () => {
  const { user, userData } = useAuth();
  const { openLoginModal } = useModal();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 w-300 mt-10">
      <div className="text-3xl font-bold">Settings</div>
      <div className="border-b border-[#ced4d7]"></div>

      {!user || !userData ? (
        <>
          <div className="flex flex-col items-center justify-center">
            <div className="w-100 h-full">
              <Image src={Login} alt="Login" />
            </div>
            <div className="text-xl font-bold mb-4">
              Please log in to your account to see your details
            </div>
            <div>
              <button className="btn" onClick={() => openLoginModal()}>
                Login
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="font-bold">Your Subscription plan</div>
            <div className="first-letter:uppercase">{userData.plan}</div>
            {userData.plan === "basic" && (
              <div className="w-20 mt-1">
                <button className="btn" onClick={() => router.push("/choose-plan")}>
                  Upgrade to Premium
                </button>
              </div>
            )}
          </div>
          <div className="border-b border-[#ced4d7]"></div>
          <div>
            <div className="font-bold">Email</div>
            <div>{userData.email}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
