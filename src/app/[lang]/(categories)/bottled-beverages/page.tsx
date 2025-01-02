import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Bottled Beverages`,
  openGraph: {
    title: `${siteMetadata.title} - Bottled Beverages`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const BottleBeverages = () => {
  return (
    <div>
      <CategoryPageComponent name="Bottled Beverages" link="/bottled-beverages" />
    </div>
  );
};

export default BottleBeverages;
