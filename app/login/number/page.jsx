import AuthHeaderAnimation from "@/components/auth/AuthHeaderAnimation";
import LoginWithNumber from "@/components/auth/login-number/LoginWithNumber";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Super-5 | Login",
  description: "Super-5 | Login",
};

const LoginPage = () => {
  return (
    <>
      <div className="bg-primary flex flex-col mx-auto px-[10px] w-full max-w-[430px] min-h-[100dvh]">
        <div className="flex mix-blend-color-dodge pt-8 justify-center">
          <Image
            width={132}
            height={50}
            src="/img/logo/logo.jpeg"
            className="w-[132px]"
          />
        </div>
        <img
          src="/img/auth/white.png"
          className="bottom-0 left-0 h-[45%] w-full absolute"
        />
        <div className="flex grow justify-end pb-[22px] items-center flex-col">
          <div className="max-w-[390px] overflow-hidden min-w-full rounded-[20px] relative bg-white shadow-c2 w-full">
            <h3 className="text-[18px] bg-[#ffbea9] font-bold py-[15px] text-thamarblack text-center">
              Login to Super5
            </h3>
            <div className="px-4 pb-8">
              <LoginWithNumber />
            </div>
          </div>

          <div className="mt-6 relative">
            <p className="text-[14px] text-center">
              New User?{" "}
              <Link href="/signup" className="text-primary font-bold">
                Create your account
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
