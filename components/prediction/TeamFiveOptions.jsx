"use client";
import React, { useEffect } from "react";
import { teamFiveData } from "../common/helper";

const TeamFiveOptions = ({
  teamOptions,
  setTeamOptions,
  ifUserSelectPlayer,
}) => {
  const teamOptionsSelecteHandler = (val) => {
    const newTeamOptions = teamOptions.map((d) => {
      if (d.id === val.id) {
        d.selected = !d.selected;
      } else {
        d.selected = false;
      }
      return d;
    });
    ifUserSelectPlayer(newTeamOptions);
    setTeamOptions(newTeamOptions);
  };
  useEffect(() => {
    ifUserSelectPlayer(teamFiveData);
    setTeamOptions(teamFiveData);
  }, []);
  return (
    <div className="max-w-[430px] mx-auto w-full px-[10px]">
      <h2 className="text-primary font-[900] text-[22px] py-2 text-center">
        Team Five options
      </h2>

      <div className="flex">
        <div className="grow">
          <span className="text-[#787878] flex pl-[10px] font-bold text-[15px]">
            Options
          </span>
        </div>
        <div className="w-[118px] flex justify-center items-center gap-1">
          <img src="/img/prediction/infoIcon.png" className="w-[16px]" />
          <span className="text-[#787878] font-bold text-[12px]">
            Correct points
          </span>
        </div>
        <div className="w-[118px] flex justify-center items-center gap-1">
          <img src="/img/prediction/infoIcon.png" className="w-[16px]" />
          <span className="text-[#787878] font-bold text-[12px]">
            Wrong points
          </span>
        </div>
      </div>
      <div className="flex mt-4 scrollbar-hide h-[calc(100dvh-280px)] pb-2 overflow-auto flex-col gap-2">
        {teamOptions &&
          teamOptions.length > 0 &&
          teamOptions.map((d) => (
            <div
              onClick={() => teamOptionsSelecteHandler(d)}
              className={`flex cursor-pointer min-h-[50px]  shadow-sm rounded-lg ${
                d.selected ? "bg-primary" : "bg-white"
              }`}
            >
              <div className="grow flex items-center gap-1 pl-[10px] ">
                {d.playerType == "batter" ? (
                  <img src="/img/contest/batter.png" className="w-[30px]" />
                ) : null}
                {d.playerType == "allrounder" ? (
                  <img src="/img/contest/allrounder.png" className="w-[30px]" />
                ) : null}

                <span
                  className={`${
                    d.selected ? "text-white" : "text-[#181818]"
                  }  flex font-bold text-[14px]`}
                >
                  {d.name}
                </span>
              </div>
              <div className="w-[50px] flex justify-center items-center gap-1">
                <span
                  className={`${
                    d.selected ? "text-white" : "text-[#0EA900]"
                  }  font-bold text-[16px]`}
                >
                  <span>{d.correctionPoint}</span>
                </span>
              </div>
              <div className="w-[150px] flex justify-center items-center gap-1">
                <span
                  className={`${
                    d.selected ? "text-white" : "text-[#FF2E00]"
                  }  pl-[44px] font-bold text-[16px]`}
                >
                  {d.wrongPoint}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamFiveOptions;
