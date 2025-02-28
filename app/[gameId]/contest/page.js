import ContestHeader from "@/components/contest/ContestHeader";
import ContestTabs from "@/components/contest/ContestTabs";
import JoinSupercoin from "@/components/contest/JoinSupercoin";
import WiningRank from "@/components/contest/WiningRank";

export const data = {
  1:"Live",
  2:"Upcoming" , 
  3:"Completed",
  4:"Live",
  5:"Upcoming"
}

const Page = ({ params }) => {
  const { gameId } = params; // Get dynamic param from URL
  
  

  // fetch data and find if its status
  const isUpComing = data[gameId] ==="Upcoming"

  return (
    <div className="flex h-[100dvh] flex-col">
      <div className="absolute left-0 top-0 flex justify-center w-full">
        <div className="max-w-[430px] top-0 left-0 w-full h-[100px]">
          <img src="/img/header/ellipse.png" className="w-full h-full" />
        </div>
      </div>

      <div className="flex relative z-[1] grow mb-2 w-full max-w-[430px] mx-auto overflow-hidden">
        <main className="w-full">
          <ContestHeader />
          <ContestTabs active={1} gameId={gameId} />
         {isUpComing && <JoinSupercoin />}
          <WiningRank />
        </main>
      </div>
    </div>
  );
};

export default Page;
