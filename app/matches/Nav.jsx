"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const router = usePathname();

  const tabList = [
    {
      title: "Upcoming",
      id: 1,
      url: "/matches/upcoming",
    },
    {
      title: "Live",
      id: 2,
      url: "/matches/live",
    },
    {
      title: "Completed",
      id: 3,
      url: "/matches/completed",
    },
  ];

  return (
    <div className="max-w-[430px] sticky top-[20px] z-[2]  px-[10px] w-[100vw] mx-auto">
      <div className="w-full flex flex-row justify-between gap-[4px] p-3 rounded-full bg-white shadow-sm">
        {tabList.map((d) => {
          const isActive = router === d.url;
          return (
            <Link
              key={d.id}
              className={`text-[14px] rounded-full w-full max-w-[120px] text-center py-[7px] font-bold text-white ${
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

export default Nav;
