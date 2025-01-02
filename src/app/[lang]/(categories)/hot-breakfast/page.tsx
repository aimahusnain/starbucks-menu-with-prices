import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Hot Breakfast`,
  openGraph: {
    title: `${siteMetadata.title} - Hot Breakfast`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const HotBreakFast = () => {
  return (
    <div>
      <CategoryPageComponent name="Hot Breakfast" link="/hot-breakfast" />
    </div>
  );
};

export default HotBreakFast;
