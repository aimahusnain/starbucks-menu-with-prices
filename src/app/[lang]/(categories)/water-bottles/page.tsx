import CategoryPageComponent from "@/components/Category/CategoryPageComponent";
import { siteMetadata } from "@/config/config";
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

const WaterBottles = () => {
  return (
    <div>

      <CategoryPageComponent name="Water Bottles" link="/water-bottles" />
    </div>
  )
};

export default WaterBottles;
