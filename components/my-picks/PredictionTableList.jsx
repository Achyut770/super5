import { RedirectArrowIcon } from "../common/Icons";

const PredictionTableList = ({ data, setShowQuestion, status }) => {
  const isUpComing = status === "Upcoming";

  return (
    <div className="flex bg-[white] hover:bg-[#FFEAE2] transition-all duration-300 rounded-lg cursor-pointer p-[10px] items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-white rounded-lg flex justify-center items-center text-[15px] font-bold h-[45px] w-[45px] bg-primary">
          {data.id}
        </span>
        <div className="flex flex-col">
          <h2 className="text-[14px] text-black font-medium">
            Player {data.id}
          </h2>
          <h4 className="text-[16px] text-black font-bold">{data.name}</h4>
        </div>
      </div>
      {isUpComing ? (
        <span
          onClick={() => setShowQuestion(true)}
          className="w-[100px] flex justify-end h-full items-center"
        >
          <RedirectArrowIcon />
        </span>
      ) : status ? (
        status
      ) : null}
    </div>
  );
};

export default PredictionTableList;
