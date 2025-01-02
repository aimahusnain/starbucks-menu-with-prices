import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Cold Cups`,
  openGraph: {
    title: `${siteMetadata.title} - Cold Cups`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const ColdCups = () => {
  return (<div>
   
    <CategoryPageComponent name="Cold Cups" link="/cold-cups" />
    </div>
    );
};

export default ColdCups;
