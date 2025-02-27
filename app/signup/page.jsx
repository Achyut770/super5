import SignUpForm from "@/components/auth/SignUpForm";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Super-5 | Signup",
  description: "Super-5 | Signup",
};

const SignUpPage = () => {
  return (
    <div className="bg-primary flex flex-col justify-center items-center mx-auto px-[10px] w-full max-w-[430px] min-h-[100dvh]">
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
        className="bottom-0 left-0 h-[65%] w-full absolute"
      />
      <div className="flex grow flex-col justify-end items-center pb-[22px]">
        <SignUpForm />

        <div className="mt-6 relative">
          <p className="text-[14px]">
            Already have an account?{" "}
            <Link href="/login/email" className="text-primary font-bold">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
