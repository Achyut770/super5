import React from "react";

const TeamBlock = ({ teamFlag, teamTitle, team, leftAlign }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`flex gap-1 justify-center items-center ${
          leftAlign ? "" : "flex-row-reverse"
        }`}
      >
        <img className="w-[48px] h-[42px] object-contain" src={teamFlag} />
        <span className="text-[#181818] font-semibold text-[16px]">{team}</span>
      </div>
      <span className="text-[#898989] text-[12px]">{teamTitle}</span>
    </div>
  );
};

export default TeamBlock;
