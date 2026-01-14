import Image from "next/image";
import Logo from "../public/home/logo.png";
import Landing from "../public/home/landing.png";

export default function Home() {
  return (
    <>
      <nav className="h-20">
        <div className="flex justify-between items-center max-w-[1070px] w-full h-full px-6 mx-auto">
          <figure className="max-w-50 w-full">
            <Image className="w-full h-full" src={Logo} alt="logo" />
          </figure>
          <ul className="flex gap-6">
            <li className="text-[#032b41] transition-colors duration-100 cursor-pointer hover:text-[#2bd97c]">
              Login
            </li>
            <li className="cursor-not-allowed text-[#032b41] transition-colors duration-100 hidden sm:block">
              About
            </li>
            <li className="cursor-not-allowed text-[#032b41] transition-colors duration-100 hidden sm:block">
              Contact
            </li>
            <li className="cursor-not-allowed text-[#032b41] transition-colors duration-100 hidden sm:block">
              Help
            </li>
          </ul>
        </div>
      </nav>
      <section id="landing">
        <div className="container">
          <div className="row">
            <div className="flex">
              <div className="w-full flex flex-col space-y-6">
                <div className="text-[#032b41] text-[40px] font-bold">
                  Gain more knowledge <br className="md:hidden" /> in less time
                </div>
                <div className="text-[#394547] text-[20px] font-light leading-normal">
                  Great summaries for busy people, <br className="md:hidden" />
                  individuals who barely have time to read,{" "}
                  <br className="md:hidden" />
                  and even people who don't like to read.
                </div>
                <button className="btn max-w-75 flex items-center justify-center">
                  Login
                </button>
              </div>
              <figure className="w-full h-full max-w-[400px]">
                <Image src={Landing} alt="landing" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
