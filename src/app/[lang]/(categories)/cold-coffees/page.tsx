import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Cold Coffees`,
  description:
    "Explore our refreshing selection of cold coffees and iced beverages.",
  openGraph: {
    title: `${siteMetadata.title} - Cold Coffees`,
    description:
      "Explore our refreshing selection of cold coffees and iced beverages.",
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
 
};

const ColdCoffees = () => {
  return (
    <div>

      <CategoryPageComponent name="Cold Coffees" link="/cold-coffees" />
    </div>
  )
    ;
};

export default ColdCoffees;
