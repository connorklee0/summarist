import Footer from "@/components/Home/Footer";
import Banner from "@/components/Sales/Banner";
import Dropdown from "@/components/Sales/Dropdown";
import Plan from "@/components/Sales/PricingPlan";

const Sales = () => {
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
