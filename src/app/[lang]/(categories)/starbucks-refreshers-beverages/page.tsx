import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Starbucks Refreshers Beverages`,
  openGraph: {
    title: `${siteMetadata.title} - Starbucks Refreshers Beverages`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const StarbucksRefreshersBeverages = () => {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/starbucks-refreshers-beverages" />
      </Head>
      <CategoryPageComponent
        name="Starbucks Refreshers® Beverages"
        link="/starbucks-refreshers-beverages"
      />
    </div>
  );
};

export default StarbucksRefreshersBeverages;
