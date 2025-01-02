import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Frappuccino® Blended Beverages`,
  openGraph: {
    title: `${siteMetadata.title} - Frappuccino® Blended Beverages`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const FrappuccinoBlendedBeverages = () => {
  return (
    <div>

      <CategoryPageComponent
        name="Frappuccino® Blended Beverages"
        link="/frappuccino-blended-beverages"
      />
    </div>
  );
};

export default FrappuccinoBlendedBeverages;
