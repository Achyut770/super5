import { useEffect, useState } from "react";
import ProfileBlock from "./ProfileBlock";
import ProfileOptions from "./ProfileOptions";

export default function ProfileSidebar() {
  const [width, setWidth] = useState(0);
  const toggleProfileSidebar = () => {
    document.body.classList.toggle("show-profile-sidebar");
  };

  useEffect(() => {
    // Function to update the width and set CSS variable
    const updateWidth = () => {
      const documentWidth = document.documentElement.scrollWidth - 430;
      setWidth(documentWidth);
      document.documentElement.style.setProperty(
        "--sidebar-left-offset",
        `${documentWidth / 2}px`
      );
    };

    // Set initial width
    updateWidth();

    // Update width on window resize
    window.addEventListener("resize", updateWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <>
      <div
        onClick={toggleProfileSidebar}
        className="overlay w-full fixed top-0 left-0 z-[100] overflow-hidden h-[100dvh] bg-black opacity-80"
      ></div>
      <div className="flex duration-300 transition-all bg-white profile-sidebar z-[1000] h-[100dvh] fixed top-0 w-[340px] flex-col">
        <div className="overflow-auto relative">
          <div className="absolute left-0 top-0 flex justify-center w-full">
            <div className="w-full top-0 left-0 h-[100px]">
              <img
                src="/img/header/Ellipse-down.png"
                className="w-full h-full"
              />
            </div>
          </div>
          <ProfileBlock />
          <div className="flex relative z-[1] pb-[60px] grow mb-2 w-full overflow-hidden">
            <main className="pt-[20px] w-full">
              <ProfileOptions />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
