import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import UpcomingMatches from "@/components/homepage/UpcomingMatches";
import MyMatches from "@/components/homepage/MyMatches";
import PromotionBanner from "@/components/common/PromotionBanner";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        {/* HEADER */}
        <Header />
        <div className="flex relative z-[1] pb-[60px] grow mb-2 w-full max-w-[430px] mx-auto overflow-hidden">
          <main className="pt-[20px] w-full">
            {/* PROMOTION BANNER */}
            <PromotionBanner />
            {/* MY MATCHES */}
            {/* <MyMatches /> */}
            {/* UPCOMING MATCHES */}
            <UpcomingMatches />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
