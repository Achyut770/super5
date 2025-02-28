import BackButton from "../../components/common/BackButton";
import Nav from "./Nav";

const ContestHeader = () => {
  return (
    <div className="max-w-[430px] relative h-[70px] flex flex-col justify-center gap-[4px] mx-auto w-full">
      <div className="absolute top-[22px] left-[10px]">
        <BackButton />
      </div>
      <h2 className="text-[20px] leading-[1] text-center text-white font-bold">
        My Matches
      </h2>
    </div>
  );
};

const layout = ({ children }) => {
  return (
    <section className="flex h-[100vh] flex-col">
      <div className="fixed left-0 top-0 flex justify-center w-full z-[2]">
        <div className="max-w-[430px] top-0 left-0 w-full h-[100px]">
          <img src="/img/header/ellipse.png" className="w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col relative  grow w-full max-w-[430px] mx-auto ">
        <div className="fixed top-0 z-[3]">
          <ContestHeader />
          <Nav />
        </div>
        <div className="h-[130px]"></div>
        <main className="w-full">
          <div className="flex-grow overflow-auto max-h-[calc(100dvh-130px)] scrollbar-hide pt-4">
            {children}
          </div>
        </main>
      </div>
    </section>
  );
};

export default layout;
