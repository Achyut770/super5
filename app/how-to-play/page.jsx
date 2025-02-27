import { ArrowIcon } from "@/components/common/Icons";
import AboutSuperFive from "@/components/how-to-play/AboutSuperFive";
import EnjoyMatch from "@/components/how-to-play/EnjoyMatch";
import FreeContest from "@/components/how-to-play/FreeContest";
import HowToPlayHeader from "@/components/how-to-play/HowToPlayHeader";
import MakePrediction from "@/components/how-to-play/MakePrediction";
import SelectMatch from "@/components/how-to-play/SelectMatch";
import Steps from "@/components/how-to-play/Steps";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[430px] relative  mx-auto">
      <div className="fixed z-[100] max-w-[430px] mx-auto w-full top-0 h-[80px]">
        <img src="/img/header/ellipse.png" className="w-full h-full" />
      </div>
      <HowToPlayHeader />
      <div className="relative pb-[90px] px-[10px]">
        <AboutSuperFive />
        <Steps />
        <SelectMatch />
        <MakePrediction />
        <FreeContest />
        <EnjoyMatch />

        <div className="text-black text-[14px] mt-3 font-medium">
          <b>NOTE:-</b> If you still need more help out please go to help and
          support to read faq and to contact support
        </div>
      </div>
    </div>
  );
};

export default page;
