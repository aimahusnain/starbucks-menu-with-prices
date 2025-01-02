import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Oatmeal & Yogurt`,
  openGraph: {
    title: `${siteMetadata.title} - Oatmeal & Yogurt`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const OatmealAndYogurt = () => {
  return (
    <div>

      <CategoryPageComponent
        name="Oatmeal & Yogurt"
        link="/oatmeal-and-yogurt"
      />
    </div>
  );
};

export default OatmealAndYogurt;
