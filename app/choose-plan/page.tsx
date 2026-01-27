import Footer from "@/components/Home/Footer";
import Banner from "@/components/Sales/Banner";
import Plan from "@/components/Sales/Plan";

const Sales = () => {
  return (
    <div className="flex flex-col gap-15">
      <Banner />
      <Plan />
      <Footer />
    </div>
  );
};

export default Sales;
