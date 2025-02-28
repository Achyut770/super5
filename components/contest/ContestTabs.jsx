"use client";
import Link from "next/link";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";

const ContestTabs = ({ active, gameId }) => {
  const tabList = [
    { title: "Contest", id: 1, url: `/${gameId}/contest` },
    { title: "My Picks", id: 2, url: `/${gameId}/my-picks` },
    { title: "Leaderboard", id: 3, url: `/${gameId}/leaderboard` },
    { title: "Rules", id: 4, url: `/${gameId}/rules` },
    { title: "Stats", id: 5, url: `/${gameId}/stats` },
  ];

  const [activeTab, setActiveTab] = useState(active);

  return (
    <div className="max-w-[430px] relative px-[10px] w-full mx-auto">
      <div className="w-full flex p-3 gap-3 overflow-x-auto whitespace-nowrap rounded-full bg-white shadow-sm scrollbar-hidden md:scrollbar-custom">
        {tabList.map((d) => {
          const isActive = d.id === activeTab;
          return (
            <Link
              key={d.id}
              className={`text-[14px] rounded-full px-[12px] py-[7px] font-bold text-white ${
                isActive ? "bg-primary" : "bg-[#FFBEA9]"
              }`}
              href={d.url}
            >
              {d.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContestTabs;
