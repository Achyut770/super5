"use client";
import React from "react";
import { footerLinks } from "./helper";

import Link from "next/link";
import ProfileSidebar from "../profile/ProfileSidebar";

const Footer = () => {
  const toggleProfileSidebar = () => {
    document.body.classList.toggle("show-profile-sidebar");
  };
  return (
    <>
      <ProfileSidebar />
      <div className="z-[2] fixed bottom-0 left-0 w-full">
        <footer className="max-w-[430px] mx-auto w-full">
          <div className="h-[56px] px-[12px] shadow-lg rounded-[24px_24px_0_0] w-full border border-[#E7E7E7] bg-[#FBFBFB] flex items-center justify-between">
            {footerLinks.map((obj, index) => (
              <>
                {obj.title == "Profile" ? (
                  <>
                    <div
                      onClick={toggleProfileSidebar}
                      key={index}
                      className="flex cursor-pointer flex-col items-center"
                    >
                      <div className="w-[20px]">{obj.icon}</div>
                      <span
                        className={`text-[12px] ${
                          obj.url == "/" ? "text-primary" : "text-[#181818]"
                        }`}
                      >
                        {obj.title}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      key={index}
                      href={obj.url}
                      className="flex flex-col items-center"
                    >
                      <div className="w-[20px]">{obj.icon}</div>
                      <span
                        className={`text-[12px] ${
                          obj.url == "/" ? "text-primary" : "text-[#181818]"
                        }`}
                      >
                        {obj.title}
                      </span>
                    </Link>
                  </>
                )}
              </>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
