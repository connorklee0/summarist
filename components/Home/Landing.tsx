import Image from "next/image";
import LandingImg from "../../public/home/landing.png";

const Landing = () => {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="w-full max-w-[560px] flex flex-col space-y-6 md:pt-6">
              <div className="text-[#032b41] text-[40px] font-bold landing__text">
                Gain more knowledge <br className="md:hidden" /> in less time
              </div>
              <div className="text-[#394547] text-[20px] font-light leading-tight landing__text">
                Great summaries for busy people, <br className="md:hidden" />
                individuals who barely have time to read,{" "}
                <br className="md:hidden" />
                and even people who don't like to read.
              </div>
              <button className="btn max-w-75 flex items-center justify-center">
                Login
              </button>
            </div>
            <figure className="w-full h-full max-w-100">
              <Image src={LandingImg} alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
