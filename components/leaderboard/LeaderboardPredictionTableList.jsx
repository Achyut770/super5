import { TableCoinIcon } from "../common/Icons";

const LeaderboardPredictionTableList = ({
  data,
  setShowSelectedPrediction,
  status,
}) => {
  const isUpComing = status === "Upcoming";
  return (
    <div
      onClick={() => setShowSelectedPrediction(true)}
      className="flex bg-[white] hover:bg-[#FFEAE2] transition-all duration-300 rounded-lg cursor-pointer items-center justify-between"
    >
      <div class="flex items-center w-full py-2 h-[60px]">
        <div class="grow flex pl-[10px] flex-col">
          <span class="text-[#000] flex font-medium text-[16px]">
            {data.title}
          </span>
          {data && data.offer && (
            <span className="text-primary flex items-center gap-1 font-bold text-[13px]">
              {data.offer} {data && data.icon && <TableCoinIcon />}
            </span>
          )}
        </div>
        <div class="w-[80px] flex justify-center items-center gap-1">
          <span class="text-[#000] text-[15px]">
            {isUpComing ? data.points : status}
          </span>
        </div>
        <div class="w-[80px] flex justify-center items-center gap-1">
          <span class="text-[#000] text-[15px]">
            {isUpComing ? data.rank : status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPredictionTableList;
