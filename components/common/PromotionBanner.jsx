"use client";
import React, { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SkeletonCard from "./SkeletonCard";
import Link from "next/link";
const PromotionBanner = () => {
  const [loading, setLoading] = useState(false);
  const arr = [1, 2, 3];
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="px-[10px]">
      {loading && <SkeletonCard />}
      {!loading && (
        <Swiper
          className="mySwiper h-[170px] w-full"
          spaceBetween={12}
          slidesPerView={"auto"}
          loop={true}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
        >
          {arr.map((d, index) => (
            <SwiperSlide key={index} className="max-w-full">
              <div className="w-full h-[146px] bg-[#213743] rounded-[10px] relative">
                <img
                  src="/img/banner/banner-img.png"
                  className="w-[119px] z-[3] absolute bottom-0 right-4 h-[126px] object-contain"
                />

                <div className="flex flex-col pl-3 w-full relative z-10">
                  <div className="pt-1">
                    <span className="px-1 py-[2px] rounded-md bg-white text-black text-[12px] font-semibold">
                      Promo
                    </span>
                  </div>
                  <div className="w-[220px] flex flex-col">
                    <h3 className="text-[#ED5311] font-bold text-[20px]">
                      Win IPhone Free
                    </h3>
                    <div className="flex flex-col">
                      <p className="text-[floralwhite] leading-[1.2] font-semibold text-[14px]">
                        Join our Free contest & Predict 5 questions*
                      </p>
                      <Link
                        href="/how-to-play"
                        className="banner-btn-gradient flex justify-center items-center mt-2 py-2 text-white w-[173px] font-semibold rounded-[8px] text-[12px]"
                      >
                        LEARN HOW TO PLAY
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default PromotionBanner;
