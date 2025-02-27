import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "react-loading-skeleton/dist/skeleton.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Super-5",
  description: "Join our Free contest & Predict 5 questions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon.png"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
