"use client";
import Link from "next/link";
import React, { useState } from "react";

const ContestTabs = ({ active }) => {
  const tabList = [
    {
      title: "Contest",
      id: 1,
      url: "/contest/1",
    },
    {
      title: "My Picks",
      id: 2,
      url: "/my-picks",
    },
    {
      title: "Leaderboard",
      id: 3,
      url: "/leaderboard",
    },
    {
      title: "Rules",
      id: 4,
      url: "/rules",
    },
  ];
  const [activeTab, setActiveTab] = useState(active);
  console.log(active);
  return (
    <div className="max-w-[430px] relative px-[10px] w-full mx-auto">
      <div className="w-full flex justify-between p-3 rounded-full bg-white shadow-sm">
        {tabList.map((d) => {
          const active = d.id === activeTab;

          return (
            <Link
              key={d.id}
              className={`text-[14px] rounded-full px-[12px] py-[7px] font-bold text-white ${
                active ? "bg-primary" : "bg-[#FFBEA9]"
              }`}
              href={d.url}
              // onClick={() => setActiveTab(d.id)}
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
