import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Snacks & Sweets`,
  openGraph: {
    title: `${siteMetadata.title} - Snacks & Sweets`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const SnacksAndSweets = () => {
  return (      <div>
        <Head>
          <link rel="canonical" href="https://starbucks-menu-with-prices.net/snacks-and-sweets" />
        </Head>
        <CategoryPageComponent name="Snacks & Sweets" link="/snacks-and-sweets" />
        </div>
  );
};

export default SnacksAndSweets;
