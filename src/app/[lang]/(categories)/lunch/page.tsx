import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Lunch`,
  openGraph: {
    title: `${siteMetadata.title} - Lunch`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const Lunch = () => {
  return (
    <div>
      <CategoryPageComponent name="Lunch" link="/lunch" /></div>
  );
};

export default Lunch;
