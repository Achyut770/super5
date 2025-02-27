"use client";
import { useState } from "react";

import LeaderboardPredictionTableList from "./LeaderboardPredictionTableList";
import SelectedPrediction from "./SelectedPrediction";

const LeaderboardPrediction = () => {
  const [showSelectedPrediction, setShowSelectedPrediction] = useState(false);

  const predictionTableData = [
    {
      id: 1,
      title: "Samir Alley",
      offer: "Won iPhone 15",
      points: "1400",
      rank: "01",
    },
    {
      id: 2,
      title: "Line Bee",
      offer: "Won 150",
      icon: true,
      points: "1300",
      rank: "02",
    },
    {
      id: 3,
      title: "Bill Smith",
      offer: "Won 100",
      icon: true,
      points: "1414",
      rank: "03",
    },
    {
      id: 4,
      title: "Mary Luck",
      points: "1900",
      rank: "04",
    },
    {
      id: 5,
      title: "Sandy Blue",
      points: "1450",
      rank: "05",
    },
    {
      id: 6,
      title: "Sara Hi",
      points: "1450",
      rank: "06",
    },
    {
      id: 7,
      title: "Mary Luck",
      points: "1900",
      rank: "07",
    },
    {
      id: 8,
      title: "Sara Hi",
      points: "1450",
      rank: "08",
    },
    {
      id: 9,
      title: "Sandy Blue",
      points: "1450",
      rank: "09",
    },
  ];
  return (
    <>
      <div className={`max-w-[430px] grow flex-col flex mx-auto px-[10px]`}>
        <div class="flex py-3">
          <div class="grow">
            <span class="text-[#000] flex pl-[10px] font-bold text-[15px]">
              All Predictions (1900)
            </span>
          </div>
          <div class="w-[80px] flex justify-center items-center gap-1">
            <span class="text-[#000] font-bold text-[15px]">Points</span>
          </div>
          <div class="w-[80px] flex justify-center items-center gap-1">
            <span class="text-[#000] font-bold text-[15px]">Rank</span>
          </div>
        </div>

        <div className="flex flex-col h-[calc(100dvh-182px)] scrollbar-hide overflow-auto gap-2">
          {predictionTableData.map((d) => {
            return (
              <LeaderboardPredictionTableList
                setShowSelectedPrediction={setShowSelectedPrediction}
                data={d}
              />
            );
          })}
        </div>
      </div>
      {showSelectedPrediction && (
        <div
          onClick={() => setShowSelectedPrediction(false)}
          className="fixed bg-[black] opacity-65 z-[9] h-[100vh] top-0 w-full left-0 flex justify-center"
        ></div>
      )}
      <div
        style={{ bottom: showSelectedPrediction ? "0" : "-100%" }}
        className="fixed z-[100] duration-200 transition-all max-h-[80dvh] w-full left-0 flex justify-center"
      >
        <SelectedPrediction
          setShowSelectedPrediction={setShowSelectedPrediction}
        />
      </div>
    </>
  );
};

export default LeaderboardPrediction;
