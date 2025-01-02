import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Other`,
  openGraph: {
    title: `${siteMetadata.title} - Other`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const other = () => {
  return (
  <div>
    <Head>
        <link rel="canonical" href="https://starbucks-menu-with-prices.net/other" />
    </Head>
    <CategoryPageComponent name="Other" link="/other" />
    </div>
    )
    ;
};

export default other;
