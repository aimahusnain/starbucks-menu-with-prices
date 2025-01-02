import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Water Bottles`,
  openGraph: {
    title: `${siteMetadata.title} - Water Bottles`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const WholeBean = () => {
  return (
    <div> 
      <CategoryPageComponent name="Whole Bean" link="/whole-bean" />
    </div>);
};

export default WholeBean;
