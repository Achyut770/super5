import React from "react";
import { profileOptionsData } from "../common/helper";
import { RightArrow } from "../common/Icons";
import Link from "next/link";

const ProfileOptions = () => {
  const toggleProfileSidebar = () => {
    document.body.classList.toggle("show-profile-sidebar");
  };
  return (
    <div className="max-w-[430px] flex flex-col gap-2 mx-auto px-[10px] mt-4">
      {profileOptionsData.map((d) => (
        <Link
          onClick={toggleProfileSidebar}
          href={d.link}
          className="flex cursor-pointer px-2 group rounded-md hover:bg-primary hover:bg-opacity-10 transition-all duration-300 items-center h-[46px] justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="h-[38px] w-[38px] flex justify-center items-center bg-[#FFEEE7] rounded-[10px]">
              {d.icon}
            </div>
            <span className="text-[#181818] text-[16px] duration-300 transition-all font-medium group-hover:font-bold">
              {d.title}
            </span>{" "}
            {d.title === "Refer and Earn" && (
              <h3 className="highlight flex px-[5px] font-bold text-[12px] rounded-md">
                1 Lakh{" "}
              </h3>
            )}
          </div>
          <RightArrow />
        </Link>
      ))}
    </div>
  );
};

export default ProfileOptions;
