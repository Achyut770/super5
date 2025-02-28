"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="focus:outline-none">
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
          strokeWidth="3"
        />
      </svg>
    </button>
  );
};

export default BackButton;
