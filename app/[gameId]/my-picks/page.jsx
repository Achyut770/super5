import ContestHeader from "@/components/contest/ContestHeader";
import ContestTabs from "@/components/contest/ContestTabs";
import PredictionTable from "@/components/my-picks/PredictionTable";
import { statusData } from "../../../components/common/helper";

const Page = ({ params }) => {
  const { gameId } = params;

  const statusGame = statusData[gameId] ? statusData[gameId] : null;

  return (
    <div className="flex h-[100dvh] flex-col">
      <div className="absolute left-0 top-0 flex justify-center w-full">
        <div className="max-w-[430px] top-0 left-0 w-full h-[100px]">
          <img src="/img/header/ellipse.png" className="w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col relative z-[1] grow w-full max-w-[430px] mx-auto overflow-hidden">
        <main className="w-full">
          <ContestHeader />
          <ContestTabs active={2} gameId={gameId} />

          {/* Only render PredictionTable if statusGame is valid */}
          {statusGame ? (
            <PredictionTable status={statusGame} />
          ) : (
            <p className="text-center text-red-500">Invalid game ID</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Page;
