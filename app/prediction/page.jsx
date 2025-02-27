"use client";
import { ArrowIcon } from "@/components/common/Icons";
import PredictionHeader from "@/components/prediction/PredictionHeader";
import PredictionTabs from "@/components/prediction/PredictionTabs";
import TeamFiveOptions from "@/components/prediction/TeamFiveOptions";
import TeamFourOptions from "@/components/prediction/TeamFourOptions";
import TeamOneOptions from "@/components/prediction/TeamOneOptions";
import TeamThreeOptions from "@/components/prediction/TeamThreeOptions";
import TeamTwoOptions from "@/components/prediction/TeamTwoOptions";
import { useState } from "react";
const page = () => {
  const tabList = [
    {
      title: "1",
      id: 1,
    },
    {
      title: "2",
      id: 2,
    },
    {
      title: "3",
      id: 3,
    },
    {
      title: "4",
      id: 4,
    },
    {
      title: "5",
      id: 5,
    },
  ];
  const [activeTab, setActiveTab] = useState(1);
  const [teamOptions, setTeamOptions] = useState();
  const [hasSelectedPlayer, setHasSelectedPlayer] = useState();
  const ifUserSelectPlayer = (data) => {
    const filteredPlayers = data.filter((d) => d.selected === true);
    if (filteredPlayers.length > 0) {
      setHasSelectedPlayer(true);
    } else {
      setHasSelectedPlayer(false);
    }
  };

  return (
    <div className="flex h-[100dvh] flex-col">
      <div className="absolute left-0 top-0 flex justify-center w-full">
        <div className="max-w-[430px] top-0 left-0 w-full h-[100px]">
          <img src="/img/header/ellipse.png" className="w-full h-full" />
        </div>
      </div>

      <div className="flex relative z-[1] grow mb-2 w-full max-w-[430px] mx-auto overflow-hidden">
        <main className="w-full">
          <PredictionHeader />
          <PredictionTabs
            tabList={tabList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {activeTab === 1 && (
            <TeamOneOptions
              teamOptions={teamOptions}
              setTeamOptions={setTeamOptions}
              ifUserSelectPlayer={ifUserSelectPlayer}
            />
          )}
          {activeTab === 2 && (
            <TeamTwoOptions
              teamOptions={teamOptions}
              setTeamOptions={setTeamOptions}
              ifUserSelectPlayer={ifUserSelectPlayer}
            />
          )}
          {activeTab === 3 && (
            <TeamThreeOptions
              teamOptions={teamOptions}
              setTeamOptions={setTeamOptions}
              ifUserSelectPlayer={ifUserSelectPlayer}
            />
          )}
          {activeTab === 4 && (
            <TeamFourOptions
              teamOptions={teamOptions}
              setTeamOptions={setTeamOptions}
              ifUserSelectPlayer={ifUserSelectPlayer}
            />
          )}
          {activeTab === 5 && (
            <TeamFiveOptions
              teamOptions={teamOptions}
              setTeamOptions={setTeamOptions}
              ifUserSelectPlayer={ifUserSelectPlayer}
            />
          )}
        </main>
      </div>
      <footer className="fixed z-[10] bottom-0 left-0 h-[60px] flex items-center justify-center mx-auto w-full">
        <div className="max-w-[430px] px-[10px] w-full mx-auto h-full flex gap-2 items-center">
          {activeTab > 1 && (
            <button
              onClick={() => setActiveTab(activeTab - 1)}
              className="h-[50px] cursor-pointer flex justify-center items-center w-[50px] rounded-full border border-[#DEDCDC]"
            >
              <ArrowIcon />
            </button>
          )}

          <button
            onClick={() =>
              hasSelectedPlayer
                ? activeTab < 5
                  ? setActiveTab(activeTab + 1)
                  : null
                : null
            }
            className={`${
              hasSelectedPlayer ? "bg-[#28A33C]" : "bg-[#FFBEA9]"
            } text-white grow h-[50px] font-bold text-base items-center flex justify-center rounded-full`}
          >
            {activeTab === 5 ? "Submit" : "Next"}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default page;
