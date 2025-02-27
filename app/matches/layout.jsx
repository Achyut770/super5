import Link from "next/link";
import Nav from "./Nav";

const ContestHeader = () => {
  return (
    <div className="max-w-[430px] relative h-[70px] flex flex-col justify-center gap-[4px] mx-auto w-full">
      <div className="absolute top-[22px] left-[10px]">
        <Link href="/">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2L3 14.4138M3 14.4138L15 26M3 14.4138H27"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </Link>
      </div>
      <h2 className="text-[20px] leading-[1] text-center text-white font-bold">
        Matches
      </h2>
    </div>
  );
};

const layout = ({ children }) => {
  return (
    <section className="flex h-[100dvh] flex-col">
      <div className="absolute left-0 top-0 flex justify-center w-full">
        <div className="max-w-[430px] top-0 left-0 w-full h-[100px]">
          <img src="/img/header/ellipse.png" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col relative z-[1] grow w-full max-w-[430px] mx-auto overflow-hidden">
        <main className="w-full">
          <ContestHeader />
          <Nav />
          {children}
        </main>
      </div>
    </section>
  );
};

export default layout;
