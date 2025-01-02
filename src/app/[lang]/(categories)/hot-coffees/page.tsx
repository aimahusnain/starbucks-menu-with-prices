import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Hot Coffees`,
  openGraph: {
    title: `${siteMetadata.title} - Hot Coffees`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const HotCoffees = () => {
  return (
    <div>

      <CategoryPageComponent name="Hot Coffees" link="/hot-coffees" />;
    </div>
  )
};

export default HotCoffees;
