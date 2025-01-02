import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { Metadata } from "next";
import React from "react";
import { siteMetadata } from '../../config/config'


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
  return (<div>

    <CategoryPageComponent name="Bakery" link="/bakery" />
  </div>);
};

export default Bakery;