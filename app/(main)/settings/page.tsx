"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import LoginDisplay from "@/components/ui/LoginDisplay";

const page = () => {
  const { user, userData } = useAuth();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 md:w-300 mt-10 max-md:mx-10">
      <div className="text-3xl font-bold">Settings</div>
      <div className="border-b border-[#ced4d7]"></div>

      {!user || !userData ? (
        <LoginDisplay description="Log in to your account to see your details" />
      ) : (
        <>
          <div>
            <div className="font-bold">Your Subscription plan</div>
            <div className="first-letter:uppercase">{userData.plan}</div>
            {userData.plan === "basic" && (
              <div className="w-20 mt-1">
                <button
                  className="btn"
                  onClick={() => router.push("/choose-plan")}
                >
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
