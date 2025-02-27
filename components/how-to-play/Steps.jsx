"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Steps = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".sections");
    const sectionsLink = document.querySelectorAll(".steps-link");

    sections.forEach((section, index) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: sections[index],
          start: "top 20%",
          end: "bottom 20%",
          toggleClass: {
            targets: sectionsLink[index],
            className: "in-view",
          },
          markers: false, // Optional: for debugging
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className=" fixed bottom-0 left-0 w-full flex justify-center">
      <div className="max-w-[430px] w-full py-2 bg-[#fbfbfb]">
        <div className="flex relative px-3 justify-between">
          <img
            src="/img/how-to-play/line.png"
            className="w-[88%] absolute top-4 left-[50%] translate-x-[-50%]"
          />
          <div className="flex w-[70px] transition-all duration-300 steps-link flex-col justify-center items-center gap-1">
            <Link
              className="w-[40px] transition-all duration-300  bg-[#F8F8F8] tabs-filter flex justify-center items-center h-[40px] rounded-full"
              href="#select-match"
            >
              <span className="leading-[1] transition-all duration-300 font-bold text-primary">
                1
              </span>
            </Link>
            <div className="text-[12px] w-[70px] text-center leading-[1.2] text-black font-bold">
              Select Match
            </div>
          </div>
          <div className="flex w-[70px] steps-link transition-all duration-300  flex-col justify-center items-center gap-1">
            <Link
              className="w-[40px]  bg-[#F8F8F8] transition-all duration-300 tabs-filter flex justify-center items-center h-[40px] rounded-full"
              href="#prediction-match"
            >
              <span className="leading-[1] transition-all duration-300 font-bold text-primary">
                2
              </span>
            </Link>
            <div className="text-[12px] w-[70px] text-center leading-[1.2] text-black font-bold">
              Make Your Prediction
            </div>
          </div>
          <div className="flex w-[70px] transition-all duration-300 steps-link flex-col justify-center items-center gap-1">
            <Link
              className="w-[40px] transition-all duration-300 bg-[#F8F8F8] tabs-filter flex justify-center items-center h-[40px] rounded-full"
              href="#free-contest"
            >
              <span className="leading-[1] transition-all duration-300 font-bold text-primary">
                3
              </span>
            </Link>
            <div className="text-[12px] w-[70px] text-center leading-[1.2] text-black font-bold">
              Join Free Contest
            </div>
          </div>
          <div className="flex w-[70px] transition-all duration-300 steps-link flex-col justify-center items-center gap-1">
            <Link
              className="w-[40px] bg-[#F8F8F8] transition-all duration-300 tabs-filter flex justify-center items-center h-[40px] rounded-full"
              href="#enjoy-match"
            >
              <span className="leading-[1] transition-all duration-300 font-bold text-primary">
                4
              </span>
            </Link>
            <div className="text-[12px] w-[70px] text-center leading-[1.2] text-black font-bold">
              Enjoy Match
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
