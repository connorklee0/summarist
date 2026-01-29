"use client";

import Footer from "@/components/Home/Footer";
import Banner from "@/components/Sales/Banner";
import Dropdown from "@/components/Sales/Dropdown";
import Plan from "@/components/Sales/PricingPlan";
import { useRouteProtection } from "../hooks/useRouteProtection";

const Sales = () => {
  const { loading } = useRouteProtection();
  if (loading) return null;

  return (
    <div className="flex flex-col">
      <Banner />
      <Plan />
      <Dropdown />
      <Footer />
    </div>
  );
};

export default Sales;
