import Head from "next/head";
import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      {children}
    </>
  );
};

export default PageWrapper;
