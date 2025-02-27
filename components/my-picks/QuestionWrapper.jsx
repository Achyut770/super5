"use client";
import React, { useState } from "react";
import { teamFiveData } from "../common/helper";

const QuestionWrapper = ({ setShowQuestion }) => {
  const [teamOptions, setTeamOptions] = useState(teamFiveData);
  const [selectedQuestion, setSelectedQuestion] = useState();
  return (
    <div className="max-w-[430px] relative max-h-full overflow-hidden bg-white mx-auto w-full px-[10px]">
      <button
        onClick={() => setShowQuestion(false)}
        className="absolute top-4 right-4"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="#F6F6F6"
          />
          <path
            d="M16 8L8 16M8 8L16 16"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <h2 className="text-black font-[900] text-[20px] py-4 text-center">
        Question 3
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
      <div className="flex mt-4 h-[calc(100%-157px)] pb-2 overflow-auto flex-col gap-2">
        {teamOptions &&
          teamOptions.length > 0 &&
          teamOptions.map((d) => (
            <div
              onClick={() => setSelectedQuestion(d)}
              className={`${
                selectedQuestion && d.id == selectedQuestion.id
                  ? "bg-[#FFEAE2]"
                  : ""
              } flex bg-[white] hover:bg-[#FFEAE2] hover:bg-opacity-55 cursor-pointer min-h-[50px]  shadow-sm rounded-lg`}
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
      <div className="w-full">
        <button
          disabled={!selectedQuestion}
          onClick={() => setShowQuestion(false)}
          className={`${
            selectedQuestion ? "bg-primary" : "bg-[#FFBEA9]"
          }  w-full text-white grow h-[50px] font-bold text-base items-center flex justify-center rounded-full`}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default QuestionWrapper;
