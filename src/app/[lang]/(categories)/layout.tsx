import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/partials/Footer";
import SubMenu from "@/components/subMenu";
import Sidebar from "@/components/sidebar";
import Header from "@/partials/Header";
import { getTranslations } from "@/lib/languageParser";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const menu = await getTranslations(params.lang);

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0b7555" />
      </head>
      <body className={inter.className}>
      <Header lang={params.lang} menu={menu} />
      <main>
          <div className="flex mt-5 px-5 md:px-[60px] my-9">
            <Sidebar />
            <div className="w-full">{children}</div>
          </div>
        </main>
      </body>
    </html >
  );
}
