import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Mugs`,
  openGraph: {
    title: `${siteMetadata.title} - Mugs`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const Mugs = () => {
  return (
      <div>

        <CategoryPageComponent name="Mugs" link="/mugs" />;
        </div>
        )
};

export default Mugs;
