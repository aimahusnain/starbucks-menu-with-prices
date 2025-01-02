import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - VIA Instant`,
  openGraph: {
    title: `${siteMetadata.title} - VIA Instant`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },

};

const ViaInstant = () => {
  return (
    <div>
      <CategoryPageComponent name="VIA® Instant" link="/via-instant" />;
    </div>
  )
};

export default ViaInstant;
