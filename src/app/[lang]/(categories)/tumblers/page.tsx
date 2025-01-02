import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Tumblers`,
  openGraph: {
    title: `${siteMetadata.title} - Tumblers`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const Tumblers = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/tumblers" />
      </Head>
      <CategoryPageComponent
        name="Tumblers"
        link="/tumblers"
      />
    </div>
  );
};

export default Tumblers;
