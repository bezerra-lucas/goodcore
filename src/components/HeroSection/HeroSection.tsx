import Image from "next/image";

import peter from "@/assets/peter.jpg";

import yearsOfExp from "@/assets/yrs-of-exp.webp";
import locationBased from "@/assets/location-based.webp";
import projectDelivered from "@/assets/project-delivered.webp";

import { SetStateAction } from "react";

interface iHeroSection {
  setVideoModalIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

import clutch from "@/assets/clutch.webp";

export default function HeroSection({ setVideoModalIsOpen }: iHeroSection) {
  const divGridClasses =
    "border-b border-b-[#00000018] py-6 w-full flex text-center items-center flex-row justify-left border-r-[#22222245] md:border-b-0 md:border-r px-8";
  const divGridTitleClasses = "mb-1 text-[30px] font-bold text-[#5e6370]";
  const divGridTextClasses = "text-[16px] text-[#737989]";

  return (
    <>
      <div
        style={{
          background:
            "url(https://cdn-addgm.nitrocdn.com/MJnTlHySegcmvxPTBPLfaINTSJyWuhDi/assets/images/optimized/rev-9075f04/wp-content/uploads/2022/09/bg-home-lines.png), #ebeef6",
        }}
        className="w-screen pb-16 pt-[80px]"
      >
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 mx-auto mt-[0px]">
          <div className="pt-6">
            <h1 className="max-w-[90%] mx-auto font-bold text-[34px] md:text-[64px] text-center md:text-left leading-[1.1]">
              BESPOKE SOFTWARE DEVELOPMENT COMPANY
            </h1>
            <h2 className="text-[16px] md:text-[44px] text-center mb-8 md:text-left text-[#5e5f64] mt-3">
              Software development that is Good to the Core!
            </h2>
          </div>
          <div className="max-w-[90%] w-[550px] mx-auto">
            <div
              onClick={() => setVideoModalIsOpen(true)}
              className="bg-secondary rounded-[40px] cursor-pointer"
            >
              <Image
                className="max-w-screen rounded-[40px]"
                src={peter}
                alt="peter"
                width={800}
              />

              <div className="h-16 flex items-center">
                <span className="text-white font-semibold text-[20px] ml-8">
                  Hear what our clients have to say!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[97%] mx-auto flex flex-col items-center sm:grid sm:max-w-[1200px] sm:grid-cols-4 mt-16">
          <div className={divGridClasses}>
            <Image
              src={yearsOfExp}
              width={40}
              height={38}
              alt="years of experience"
              className="mr-5"
            />
            <div className="text-left">
              <h5 className={divGridTitleClasses}>17+</h5>
              <span className={divGridTextClasses}>
                Years of Industry Experience
              </span>
            </div>
          </div>
          <div className={divGridClasses}>
            <Image
              src={projectDelivered}
              width={40}
              height={38}
              alt="years of experience"
              className="mr-5"
            />
            <div className="text-left">
              <h5 className={divGridTitleClasses}>110+</h5>
              <span className={divGridTextClasses}>
                Successful Software Projects
              </span>
            </div>
          </div>
          <div className={divGridClasses}>
            <Image
              src={locationBased}
              width={40}
              height={38}
              alt="years of experience"
              className="mr-5"
            />
            <div className="text-left">
              <span className={divGridTextClasses}>
                UK-based with Offshore Development Centres
              </span>
            </div>
          </div>
          <div className="flex align-center flex-col mr-auto md:mx-auto px-8 py-6">
            <Image src={clutch} width={182} height={40} alt="clutch" />
          </div>
        </div>
      </div>
    </>
  );
}
