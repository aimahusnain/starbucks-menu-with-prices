import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Milk, Juice & More`,
  openGraph: {
    title: `${siteMetadata.title} - Milk, Juice & More`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const MilkJuceAndMore = () => {
  return (
      <div>

    <CategoryPageComponent
      name="Milk, Juice & More"
      link="/milk-juice-and-more"
        />
        </div>
  );
};

export default MilkJuceAndMore;
