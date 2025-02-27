"use client";
import Link from "next/link";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Completed from "../common/Completed";
import { RightArrowIcon, SmallCoinIcon } from "../common/Icons";
import { matchs } from "../common/helper";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const MyMatches = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="px-[10px] relative">
      <div className=" flex justify-between w-full">
        <h2 className="flex my-2 text-[16px] font-semibold text-[#181818]">
          My Matches
        </h2>
        <Link href="/" className="flex gap-2 items-center text-primary">
          <span className="text-[15px]">View All </span>
          <RightArrowIcon />
        </Link>
      </div>
      <div className="w-full">
        {loading && (
          <>
            <Skeleton duration={1} height={110} width="100%" />
          </>
        )}
        {!loading && (
          <Swiper
            className="mySwiper h-[134px] w-full"
            spaceBetween={12}
            slidesPerView={"auto"}
            loop={true}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
          >
            {matchs.map((d, index) => (
              <SwiperSlide key={index} className="max-w-[340px] h-[140px]">
                <div className="rounded-[20px] overflow-hidden border shadow-sm bg-white border-[#E7E7E7]">
                  <div className="h-[34px] card-header-gradient  flex justify-center items-center px-3">
                    <div className="flex w-full justify-between">
                      <span className="text-[14px] font-semibold text-[#181818]">
                        IPL - 2024 - T20
                      </span>
                      <button className="text-[12px] rounded-[16px] px-[11px] h-[24px] flex gap-1 justify-center items-center text-[#FC9924] font-semibold">
                        <SmallCoinIcon /> <span>You Won 10 Super Coins</span>
                      </button>
                    </div>
                  </div>
                  <div className="px-[10px]">
                    <div className="h-[1px] w-full line-gradient"></div>
                  </div>

                  <div>
                    <div className="px-3 flex justify-between items-center py-[16px]">
                      <div className="flex flex-col">
                        <div
                          className={`flex gap-1 justify-center items-center `}
                        >
                          <img
                            className="w-[48px] h-[42px] object-contain"
                            src="/img/flags/RR.png"
                          />
                          <span className="text-[#181818] font-semibold text-[16px]">
                            RR
                          </span>
                        </div>
                      </div>
                      <Completed />
                      <div className="flex flex-col">
                        <div
                          className={`flex gap-1 justify-center flex-row-reverse items-center`}
                        >
                          <img
                            className="w-[48px] h-[42px] object-contain"
                            src="/img/flags/punjab.png"
                          />
                          <span className="text-[#181818] font-semibold text-[16px]">
                            PBKS
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default MyMatches;
