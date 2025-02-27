"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
const AuthHeaderAnimation = () => {
  const textRef = useRef();

  useEffect(() => {
    const texts = textRef.current;

    const timeline = gsap.timeline({
      repeat: -1,
      onRepeat: () => {},
    });

    gsap.set(texts, { top: 0 });

    timeline
      .to(texts, { y: "0", duration: 1 })
      .to(texts, { y: "-50px", duration: 1, delay: 3 })
      .to(texts, { y: "-100px", duration: 1, delay: 3 })
      .to(texts, { y: "0", duration: 0, delay: 3 });
  }, []);
  return (
    <div className="relative h-[25px] w-full max-w-md overflow-hidden">
      <div
        ref={textRef}
        className="absolute w-full top-0 left-0 text-center text-white h-[150px] animate-slideUp text-[18px] font-bold"
      >
        <div className="h-[50px]">Use Your Cricketing Skills</div>
        <div className="h-[50px]">Create Teams</div>
        <div className="h-[50px]">Win iPhone & other Exciting Prizes FREE</div>
      </div>
    </div>
  );
};

export default AuthHeaderAnimation;
