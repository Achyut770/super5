import React from "react";
import { SmallCoinIcon } from "../common/Icons";

const ProfileBlock = () => {
  return (
    <div className="max-w-[430px] sticky top-0 pt-1 mt-[56px] z-[10] px-[10px] mx-auto w-full">
      <div className="bg-white mt-1 w-full shadow-md rounded-[20px] flex items-center gap-3 p-[10px]">
        <img src="/img/profile/profile.png" className="w-[90px]" />
        <div className="flex flex-col gap-1">
          <h2 className="text-[18px] leading-[1] font-semibold text-[#181818]">
            Devid Smith
          </h2>
          <div className="flex items-center gap-1">
            <SmallCoinIcon />{" "}
            <span className="text-[15px] text-[#1B75D5] font-medium">
              SuperCoins : 5913.5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlock;
