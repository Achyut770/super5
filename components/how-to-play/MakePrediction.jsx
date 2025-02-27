import React from "react";

const MakePrediction = () => {
  return (
    <div
      id="prediction-match"
      className="flex sections flex-col gap-6 pt-[90px]"
    >
      <div className="flex gap-2">
        <span className="text-[#181818] flex leading-[1.2] font-bold text-[20px]">
          2.
        </span>
        <div className="flex flex-col gap-2">
          <h2 className="text-[#181818] leading-[1.2] font-bold text-[20px]">
            Make Your Prediction
          </h2>
          <p className="text-black leading-[1.2] text-[14px]">
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard
          </p>
        </div>
      </div>

      <div className="flex">
        <img
          src="/img/how-to-play/select-match.png"
          className="w-[223px] mx-auto"
        />
      </div>
    </div>
  );
};

export default MakePrediction;
