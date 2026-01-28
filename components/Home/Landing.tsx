"use client";
import Image from "next/image";
import LandingImg from "../../public/home/landing.png";
import { useModal } from "../modals/useModal";

const Landing = () => {
  const { openLoginModal } = useModal();
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="w-full max-w-140 flex flex-col text-left space-y-6 max-md:pt-6 max-md:items-center max-md:max-w-135 max-md:mx-auto max-md:text-center">
              <div className="text-[#032b41] text-[40px] font-bold landing__text max-md:text-[24px]">
                Gain more knowledge <br className="md:hidden" /> in less time
              </div>
              <div className="text-[#394547] text-[20px] font-light leading-tight landing__text">
                Great summaries for busy people, <br className="md:hidden" />
                individuals who barely have time to read,{" "}
                <br className="md:hidden" />
                and even people who don't like to read.
              </div>
              <button
                className="btn max-w-75 flex items-center justify-center"
                onClick={openLoginModal}
              >
                Login
              </button>
            </div>
            <figure className="w-full h-full max-w-100 max-md:hidden">
              <Image src={LandingImg} alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
