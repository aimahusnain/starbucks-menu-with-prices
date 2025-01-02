import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Hot Teas`,
  openGraph: {
    title: `${siteMetadata.title} - Hot Teas`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const HotTeas = () => {
  return (
    <div>
      <CategoryPageComponent name="Hot Teas" link="/hot-teas" />;
    </div>
  )
};

export default HotTeas;
