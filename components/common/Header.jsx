"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CoinICon } from "./Icons";

const Header = () => {
  // ANIMATION STATE
  const [rotate, setRotate] = useState(false);
  // ANIMATION EFFECT
  useEffect(() => {
    setRotate(true);
    const timer = setTimeout(() => setRotate(false), 3000); // RESET AFTER # SECONDS
    return () => clearTimeout(timer); // CLEANUP TIMER AFTER
  }, []);
  return (
    <div className="w-full sticky top-0 z-[2]  min-h-[70px] flex justify-center items-center px-[10px] max-w-[430px] mx-auto">
      <div className="absolute top-0 left-0 w-full h-[80px]">
        <img src="/img/header/ellipse.png" className="w-full h-full" />
      </div>
      <div className="w-full items-center mt-[8px] flex relative justify-between">
        <Link href="/" className="mix-blend-color-dodge">
          <img src="/img/logo/logo.jpeg" className="w-[132px]" />
        </Link>

        <button className="px-3 rounded-full h-[40px] items-center border border-white border-opacity-[25%] flex justify-center gap-2">
          <div className="coin-container" style={{ perspective: "1000px" }}>
            <CoinICon rotate={rotate} />
          </div>
          <span className="text-[18px] leading-1 text-white font-semibold">
            5205
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
