"use client";
import React, { useState } from "react";

const PredictionTabs = ({ tabList, activeTab, setActiveTab }) => {
  return (
    <div className="max-w-[430px] relative px-[10px] w-full mx-auto">
      <div className="w-full flex justify-between p-3 rounded-full bg-white shadow-sm">
        {tabList.map((d) => {
          const active = d.id === activeTab;

          return (
            <button
              key={d.id}
              className={`text-[20px] rounded-full w-[56px] py-[3px] font-bold text-white ${
                activeTab > d.id ? "bg-primary" : "bg-[#FFBEA9]"
              }`}
            >
              {d.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PredictionTabs;
