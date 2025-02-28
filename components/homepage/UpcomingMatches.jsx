"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { matchs } from "../common/helper";

const UpcomingMatches = ({ state = "Upcoming", matches }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const isUpcoming = state === "Upcoming";
  const isLive = state === "Live";
  const isCompleted = state === "Completed";
  return (
    <div className="px-[10px]">
      {/* <h2 className="flex my-2 text-[16px] font-semibold text-[#181818]">
        {state} Matches
      </h2> */}
      <div className="flex flex-col gap-[10px] w-full">
        {loading && (
          <>
            <Skeleton duration={1} height={160} width="100%" />
            <Skeleton duration={1} height={160} width="100%" />
            <Skeleton duration={1} height={160} width="100%" />
            <Skeleton duration={1} height={160} width="100%" />
            <Skeleton duration={1} height={160} width="100%" />
            <Skeleton duration={1} height={160} width="100%" />
          </>
        )}
        {/* {!loading &&
          matchs.map((d, index) => (
            <Link key={index} href={`/contest/${index}`}>
              <div className="rounded-[20px] overflow-hidden border shadow-sm bg-white border-[#E7E7E7]">
                <div className="h-[33px]  flex justify-center items-center px-3">
                  <div className="flex w-full justify-between">
                    <span className="text-[14px] font-semibold text-[#181818]">
                      IPL - 2024 - T20
                    </span>
                    <button className="text-[12px] rounded-[16px] px-[11px] h-[24px] flex justify-center items-center bg-primary font-semibold text-white">
                      JOINED
                    </button>
                  </div>
                </div>
                <div className="px-[10px]">
                  <div className="line-gradient h-[1px] w-full"></div>
                </div>

                <div>
                  <div className="px-3 flex justify-between items-center py-[16px]">
                   
                    <TeamBlock
                      teamFlag={d.logo_Q1}
                      teamTitle={d.title_Q1}
                      team={d.team_Q1}
                      leftAlign={true}
                    />

                    <MatchTime>
                      <span className="text-[13px] text-black">
                        17<sup>th</sup> May
                      </span>
                    </MatchTime>
                    <TeamBlock
                      teamFlag={d.logo_Q2}
                      teamTitle={d.title_Q2}
                      team={d.team_Q2}
                      leftAlign={false}
                      // KEEP leftAlign FALSE FOR RIGHT SIDE TEAM
                    />
                  </div>
                </div>

                <div className="bg-[#FFF4EF] flex justify-center items-center h-[33px]">
                  <span className="text-[#181818] font-semibold text-[13px]">
                    WIN iPhone FREE
                  </span>
                </div>
              </div>
            </Link>
          ))} */}

        {!loading &&
          matches.map((d, index) => (
            // here use id from matchess d.id instead of index
            <Link href={`/${d.id}/contest`}>
              <div className="rounded-[20px] overflow-hidden border shadow-sm bg-white border-[#E7E7E7]">
                <div className="h-[33px]  flex justify-center items-center px-3">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-[14px] flex items-center gap-1 font-semibold text-[#181818]">
                      <div className="flex gap-[2px] items-center">
                        <span>3rd ODI</span>{" "}
                        <span className="h-[4px] flex w-[4px] bg-black rounded-full" />{" "}
                      </div>
                      <span>SYDNEY</span>
                    </span>
                    {isUpcoming ? (
                      <p className="text-[14px] font-medium">
                        Starts in{" "}
                        <span className="text-primary font-semibold">
                          12h:35m:30s
                        </span>
                      </p>
                    ) : (
                      <p className="text-[14px] font-medium">
                        12-Feb-24 08:30pm
                      </p>
                    )}
                  </div>
                </div>
                <div className="px-[10px]">
                  <div className="line-gradient h-[1px] w-full"></div>
                </div>

                <div>
                  <div className="px-3 flex justify-between items-center pb-[6px] pt-[12px]">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-1 items-center">
                        <img className="w-[30px]" src="/img/flags/RR.png" />
                        <span className="text-[15px] font-semibold text-black">
                          Rajasthan Royals{" "}
                          <span className="font-normal opacity-70">(RR)</span>
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <img className="w-[30px]" src="/img/flags/punjab.png" />
                        <span className="text-[15px] font-semibold text-black">
                          Punjab Kings{" "}
                          <span className="font-normal opacity-70">(PBKS)</span>
                        </span>
                      </div>
                    </div>
                    {isUpcoming && (
                      <div className="flex flex-col">
                        <p className="text-[12px] text-right">Today</p>
                        <h2 className="text-[15px] font-semibold">5:30 PM</h2>
                      </div>
                    )}
                    {isLive && (
                      <div className="text-primary font-bold">{state} </div>
                    )}
                    {isCompleted && (
                      <div className="flex flex-col items-center">
                        <div className="text-green-400 font-bold">
                          Completed
                        </div>
                        <div>
                          Won <span className="text-primary">iPhone 15</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {isUpcoming && (
                  <div className="bg-[#FFF4EF] flex justify-center items-center h-[33px]">
                    <span className="text-[#181818] font-semibold text-[13px]">
                      WIN iPhone FREE
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default UpcomingMatches;
