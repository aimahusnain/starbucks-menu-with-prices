import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Bakery`,
  openGraph: {
    title: `${siteMetadata.title} - Bakery`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const Bakery = () => {
  return (
  <div>
    <CategoryPageComponent name="Bakery" link="/bakery" />
  </div>);
};

export default Bakery;