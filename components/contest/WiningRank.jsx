import React from "react";

const WiningRank = () => {
  const arr = [
    {
      rank: 1,
      supercoin: 500,
    },
    {
      rank: 2,
      supercoin: 300,
    },
    {
      rank: 3,
      supercoin: 9,
    },
    {
      rank: 4,
      supercoin: 9,
    },
    {
      rank: 5,
      supercoin: 8,
    },
    {
      rank: 6,
      supercoin: 8,
    },
    {
      rank: 7,
      supercoin: 300,
    },
    {
      rank: 8,
      supercoin: 9,
    },
    {
      rank: 9,
      supercoin: 9,
    },
    {
      rank: 10,
      supercoin: 8,
    },
    {
      rank: 11,
      supercoin: 8,
    },
  ];
  return (
    <div className="mt-3 max-w-[430px] px-[10px] w-full mx-auto">
      <div className="bg-white rounded-[16px] w-full shadow-sm">
        <div className="flex h-[50px] justify-center items-center">
          <div className="w-[125px] flex justify-center text-[16px] font-medium text-[#181818]">
            Rank
          </div>
          <div className="grow flex text-[16px] font-medium text-[#181818] justify-center">
            Winnings
          </div>
        </div>
        <div className="h-[calc(100dvh-451px)] overflow-auto">
          {arr.map((d, index) => (
            <div
              key={index}
              className="flex h-[42px] border-t border-[#E0E0E0] justify-center items-center"
            >
              <div className="w-[125px] flex justify-center text-[16px] font-medium text-[#181818]">
                {d.rank}
              </div>
              <div className="grow flex text-[16px] font-medium text-[#181818] justify-center">
                {d.supercoin} Supercoins
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WiningRank;
