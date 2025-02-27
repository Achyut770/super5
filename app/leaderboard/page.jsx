import ContestHeader from "@/components/contest/ContestHeader";
import ContestTabs from "@/components/contest/ContestTabs";
import LeaderboardPrediction from "@/components/leaderboard/LeaderboardPrediction";

const page = () => {
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
          <ContestTabs active={3} />
          <LeaderboardPrediction />
        </main>
      </div>
    </div>
  );
};

export default page;
