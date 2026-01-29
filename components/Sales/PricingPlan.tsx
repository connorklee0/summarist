"use client";

import { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import PricingCard from "../ui/PricingCard";
import { useModal } from "@/app/context/ModalContext";
import { useAuth } from "@/app/context/AuthContext";
import { PlanType } from "@/app/lib/api/authService";
import { redirectToCheckout, PRICE_IDS } from "@/app/lib/api/stripeService";

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("premium-plus");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const { openLoginModal } = useModal();

  const handleCheckout = async (plan: PlanType) => {
    if (!user) {
      console.error("Cannot checkout without user");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const priceId = PRICE_IDS[plan];
      await redirectToCheckout(user, priceId);
    } catch (error: any) {
      console.error("Checkout error:", error);
      setError("Failed to start checkout. Please try again.");
      setIsLoading(false);
    }
  };

  const handleStartPlan = async () => {
    setError("");

    if (!user) {
      // Not logged in - open modal modal
      openLoginModal();
      return;
    }
    // User is already logged in - redirect to Stripe Checkout immediately
    await handleCheckout(selectedPlan);
  };

  return (
    <div>
      <div className="flex gap-16 justify-center mt-15">
        <div className="text-center items-center flex flex-col">
          <IoDocumentText className="text-6xl" />
          <span className="font-bold">Key Ideas in a few minutes</span> with
          many books to read
        </div>
        <div className="text-center items-center flex flex-col">
          <RiPlantFill className="text-6xl" />
          <span className="font-bold">3 million</span> people growing with
          Summarist everyday
        </div>
        <div className="text-center items-center flex flex-col">
          <FaHandshake className="text-6xl" />
          <span className="font-bold">Precise recommendations</span> collections
          curated by experts
        </div>
      </div>

      <div className="flex flex-col justify-center w-200 mx-auto">
        <div className="text-center font-bold text-3xl mt-20 mb-10">
          Choose the plan that fits you
        </div>

        {error && (
          <div className="max-w-4xl mx-auto mb-5 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        )}

        <PricingCard
          title="Premium Plus Yearly"
          price="$99.99"
          period="year"
          description="7-day free trial included"
          isSelected={selectedPlan === "premium-plus"}
          onClick={() => setSelectedPlan("premium-plus")}
        />
        <div className="w-64 text-center border-b border-[#989595] text-[#989595] leading-[0.1em] my-8 mx-auto">
          <span className="p-2 bg-white">or</span>
        </div>
        <PricingCard
          title="Premium Monthly"
          price="$9.99"
          period="month"
          description="No trial included"
          isSelected={selectedPlan === "premium"}
          onClick={() => setSelectedPlan("premium")}
        />

        <div className="sticky bottom-0 bg-white">
          <div className="text-center flex flex-col gap-2 py-8">
            <button
              className="btn max-w-72 w-full mx-auto"
              onClick={handleStartPlan}
              disabled={isLoading}
            >
              {isLoading
                ? "Loading..."
                : selectedPlan === "premium-plus"
                ? "Start your free 7-day trial"
                : "Start your first month"}
            </button>
            <div className="text-xs text-gray-500">
              {selectedPlan === "premium-plus"
                ? "Cancel your trial at any time before it ends, and you won't be charged."
                : "30-day money back guarantee, no questions asked."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
