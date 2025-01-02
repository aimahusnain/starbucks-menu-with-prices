import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Iced Tea and Lemonade`,
  openGraph: {
    title: `${siteMetadata.title} - Iced Tea and Lemonade`,
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["favicon.ico"],
  },
};

const IcedTeaAndLemonade = () => {
  return (
    <div>
      <CategoryPageComponent
        name="Iced Tea and Lemonade"
        link="/iced-tea-and-lemonade"
      />
    </div>
  );
};

export default IcedTeaAndLemonade;
