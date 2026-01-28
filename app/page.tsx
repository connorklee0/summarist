import Nav from "@/components/Home/Nav";
import Landing from "@/components/Home/Landing";
import Features from "@/components/Home/Features";
import Reviews from "@/components/Home/Reviews";
import Numbers from "@/components/Home/Numbers";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <div>
      <div className="max-w-267.5 w-full mx-auto">
        <Nav />
        <Landing />
        <Features />
        <Reviews />
        <Numbers />
      </div>
      <Footer />
    </div>
  );
}
