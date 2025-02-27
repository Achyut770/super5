"use client";
import { CrossMark, TickMark } from "../common/Icons";

const SelectedPrediction = ({ setShowSelectedPrediction }) => {
  const data = [
    {
      id: 1,
      name: "India",
      point: 170,
    },
    {
      id: 2,
      name: "Rohit Sharma",
      point: -55,
    },
    {
      id: 3,
      name: "Virat Kohli",
      point: 172,
    },
    {
      id: 4,
      name: "Rohit Sharma",
      point: -50,
    },
    {
      id: 5,
      name: "Virat Kohli",
      point: -172,
    },
  ];
  return (
    <div className="max-w-[430px] relative max-h-full overflow-hidden bg-white mx-auto w-full px-[10px]">
      <button
        onClick={() => setShowSelectedPrediction(false)}
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
      <div className="flex px-4 py-5 flex-col gap-1">
        <h2 className="text-black leading-[1] text-[18px] text-left">
          Samir Alley <b>- 150 points</b>
        </h2>
        <span className="leading-[1] font-bold text-primary">
          Won iPhone 15
        </span>
      </div>

      <div className="flex h-[calc(100%-78px)] overflow-auto flex-col gap-3">
        {data.map((d) => (
          <div className="flex px-3 cursor-pointer items-center rounded-lg bg-[#F6F6F6] py-2 justify-between w-full">
            <div className="flex gap-3 items-center">
              <span
                className={`${
                  d.point > 0 ? "bg-[#0EA900]" : "bg-[#FF2E00]"
                } text-white rounded-lg flex justify-center items-center text-[15px] font-bold h-[45px] w-[45px]`}
              >
                {d.id}
              </span>
              <div className="flex gap-[3px] flex-col">
                <h1 className="text-black text-[14px] font-medium">
                  Question {d.id}
                </h1>
                <div className="flex gap-1 items-center">
                  <p className="leading-[1] font-bold text-[16px]">{d.name} </p>
                  <p
                    className={`leading-[1] font-bold text-[16px] ${
                      d.point > 0 ? "text-[#0EA900]" : "text-[#FF2E00]"
                    }`}
                  >
                    {d.point > 0 ? `+${d.point}` : d.point}
                  </p>
                </div>
              </div>
            </div>
            <div className="">{d.point > 0 ? <TickMark /> : <CrossMark />}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedPrediction;
