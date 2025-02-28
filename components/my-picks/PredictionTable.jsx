"use client";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { DownArrowIcon } from "../common/Icons";
import PredictionTableList from "./PredictionTableList";
import QuestionWrapper from "./QuestionWrapper";

const PredictionTable = ({status}) => {
  const [showTable, setShowTable] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const dummyTableData = [
    {
      id: "1",
      name: "India",
    },
    {
      id: "2",
      name: "Rohit Sharma",
    },
    {
      id: "3",
      name: "Virat Kohli",
    },
    {
      id: "4",
      name: "Rohit Sharma",
    },

    {
      id: "5",
      name: "Virat kohli",
    },
  ];

  return (
    <>
      <div
        className={`max-w-[430px] grow flex-col flex mx-auto px-[10px] ${
          showQuestion ? "pointer-event-none" : ""
        }`}
      >
        <div className="flex my-5 items-center justify-between">
          <h2 className="text-black font-bold text-[20px]">Prediction 1</h2>
          <button
            aria-expanded={!showTable}
            aria-controls="example-panel" // it has to match the id passed to AnimateHeight
            onClick={() => setShowTable(!showTable)}
            className="bg-white h-[40px] w-[40px] flex justify-center items-center rounded-[10px] shadow-c3"
          >
            <DownArrowIcon />
          </button>
        </div>
        {showQuestion && (
          <div
            onClick={() => setShowQuestion(false)}
            className="fixed bg-[black] opacity-65 z-[9] h-[100vh] top-0 w-full left-0 flex justify-center"
          ></div>
        )}

        <AnimateHeight
          id="example-panel"
          duration={300}
          height={showTable ? "auto" : 0}
        >
          <div className="flex flex-col h-[calc(100dvh-222px)] scrollbar-hide overflow-auto gap-2">
            {dummyTableData.map((d) => {
              return (
                <PredictionTableList
                status={status}
                  setShowQuestion={setShowQuestion}
                  data={d}
                />
              );
            })}
          </div>
        </AnimateHeight>
      </div>
      <div
        style={{ top: showQuestion ? "20dvh" : "100dvh" }}
        className="fixed z-[100] top-[20dvh] flex-col duration-200 transition-all h-[80dvh] w-full left-0 flex justify-center"
      >
        <QuestionWrapper setShowQuestion={setShowQuestion} /> 
      </div>
    </>
  );
};

export default PredictionTable;
