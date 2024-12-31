"use client";

import Image from "next/image";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Menu } from "@/lib/menuItems";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const convertNameToLink = (name: string) => {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[®™,.\s]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Shuffle function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(
    Menu[0].items[0].subItems[0].products[0]
  );
  const [selectedCategory, setSelectedCategory] = useState(Menu[0].items[0]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "y" });

  // Shuffle products
  const allProducts = useMemo(() => {
    const products = Menu.flatMap((category) =>
      category.items.flatMap((item) =>
        item.subItems.flatMap((subItem) => subItem.products)
      )
    );
    return shuffleArray(products);
  }, []);

  const handleProductClick = useCallback((product: any, index: number) => {
    setSelectedProduct(product);
    setCurrentIndex(index);

    // Find and set the category based on the selected product
    for (const category of Menu) {
      for (const item of category.items) {
        for (const subItem of item.subItems) {
          if (subItem.products.includes(product)) {
            setSelectedCategory(item);
            return;
          }
        }
      }
    }
    // If no category is found, default to the first item
    setSelectedCategory(Menu[0].items[0]);
  }, []);

  const handleNextSlide = useCallback(() => {
    if (emblaApi && canScrollNext) {
      emblaApi.scrollNext();
    }
  }, [emblaApi, canScrollNext]);

  const handlePreviousSlide = useCallback(() => {
    if (emblaApi && canScrollPrev) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, canScrollPrev]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    const currentIndex = emblaApi.selectedScrollSnap();
    setCurrentIndex(currentIndex);
    setSelectedProduct(allProducts[currentIndex]);

    // Update the selected category based on the currently selected product
    for (const category of Menu) {
      for (const item of category.items) {
        for (const subItem of item.subItems) {
          if (subItem.products.includes(allProducts[currentIndex])) {
            setSelectedCategory(item);
            return;
          }
        }
      }
    }
  }, [emblaApi, allProducts]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  const link = convertNameToLink(selectedProduct.name);
  const categoryLink = convertNameToLink(selectedCategory.name);

  console.log(selectedProduct.image)

  return (
    <section className="w-full bg-white dark:bg-zinc-900 transition-colors duration-300">
      {/* Mobile View */}
      <div className="lg:hidden sm:block text-center px-4 sm:px-6 my-8">
        <header className="z-20">
          <h1 className="font-bold z-20 text-zinc-900 dark:text-zinc-50 mb-4 text-3xl sm:text-4xl md:text-5xl">
            Starbucks Menu With Prices 2024
          </h1>
          <p className="text-sm z-20 sm:text-base text-zinc-600 dark:text-zinc-300">
            Starbucks offers a diverse menu, including espresso, coffee, tea,
            bakery items, breakfast, and lunch options. In addition to their
            specialty coffee drinks, they also provide a selection of snacks and
            baked goods for those seeking a quick bite.
          </p>

          <Button
            id="Menu"
            className="bg-transparent z-20 border-2 text-green-400 border-green-400 hover:bg-green-400/10 dark:hover:bg-green-400/20 w-full rounded-full text-sm py-2 mt-5"
          >
            View Full Menu
          </Button>
        </header>
        <div className="w-[270px] absolute -left-[13rem] top-[40px] h-20 bg-orange-300/60 dark:bg-orange-400/30 rounded-full blur-3xl" />
      </div>

      {/* Desktop View */}
      <div className="lg:flex hidden pb-[50px] border-b border-zinc-200 dark:border-zinc-700 flex-col md:flex-row justify-between items-stretch px-0 overflow-x-hidden">
        <div className="py-[60px] pl-6 pr-[25px] md:pl-[5%] lg:pl-[30px] xl:pl-[40px] bg-[#C0E8A6] dark:bg-zinc-800 lg:flex hidden items-center justify-start">
          <div className="md:max-w-[1100px] items-start justify-center flex flex-col text-left">
            <span className="font-bold font-sans text-4xl lg:text-5xl xl:text-6xl text-zinc-900 dark:text-zinc-50">
              Starbucks Menu With Prices 2024
            </span>
            <p className="mt-2 lg:mt-6 text-sm lg:text-base text-zinc-600 dark:text-zinc-300">
              Starbucks offers a diverse menu, including espresso, coffee, tea,
              bakery items, breakfast, and lunch options. In addition to their
              specialty coffee drinks, they also provide a selection of snacks
              and baked goods for those seeking a quick bite.
            </p>
            <Button
              id="Menu"
              className="bg-transparent border-4 text-green-400 border-green-400 hover:bg-green-400/10 dark:hover:bg-green-400/20 w-full sm:w-[11rem] rounded-full duration-500 transition-all mt-4 lg:mt-8"
            >
              View Full Menu
            </Button>
          </div>
        </div>

        <div className="flex relative overflow-hidden bg-white dark:bg-zinc-800 w-full justify-between pl-[94px] py-[40px]">
          <div className="text-center z-20 flex flex-col items-center justify-center gap-3">
            <div className="ml-0 md:mt-0 mt-5 md:ml-6">
              <Link href={`/${categoryLink}/${link}`}>
                <Image
                  className="rounded-full max-w-[200px] md:max-w-[280px] shadow-glow shadow-green-400 dark:shadow-green-500"
                  src={`/products-images${selectedProduct.image}`}
                  alt={`${selectedProduct.name} Image`}
                  width={425}
                  height={425}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="mt-2 flex w-full items-center justify-center flex-col">
              <Link href={`/${categoryLink}/${link}`}>
                <span className="font-bold max-w-xs mb-3 text-xl lg:text-2xl line-clamp-2 h-[60px] text-zinc-900 dark:text-zinc-50">
                  {selectedProduct.name}
                </span>
              </Link>
              <div className="flex flex-col gap-2">
                <Link href={`/${categoryLink}/${link}`}>
                  <Button className="bg-green-400 hover:bg-green-400/90 text-white rounded-full duration-500 transition-all text-sm lg:text-base">
                    View Price & Calories
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex z-20 flex-col items-center justify-center">
            <button
              onClick={handlePreviousSlide}
              className={`mb-2 ${
                canScrollPrev 
                  ? "bg-green-400 hover:bg-green-400/90" 
                  : "bg-zinc-300 dark:bg-zinc-600"
              } rounded-full`}
              disabled={!canScrollPrev}
            >
              <ArrowRight className="h-6 lg:h-8 text-white w-6 lg:w-8 p-1 lg:p-2 -rotate-90" />
            </button>

            <div className="w-full ml-2 lg:ml-7 mt-5 max-w-[240px] lg:max-w-sm overflow-hidden" ref={emblaRef}>
              <div className="-mt-1 h-[300px] lg:h-[370px]">
                {allProducts.map((product, index) => {
                  let marginLeftClass = "";
                  switch (index % 3) {
                    case 0:
                      marginLeftClass = "pl-[20px] lg:pl-[40px]";
                      break;
                    case 1:
                      marginLeftClass = "pl-[40px] lg:pl-[80px]";
                      break;
                    case 2:
                      marginLeftClass = "";
                      break;
                  }

                  return (
                    <div
                      key={product.link}
                      className={`pt-1 md:basis-1/3 ${marginLeftClass}`}
                    >
                      <button
                        onClick={() => handleProductClick(product, index)}
                        className={`${
                          product === selectedProduct
                            ? "bg-green-400 text-white"
                            : "bg-white dark:bg-zinc-700 dark:text-zinc-100"
                        } w-full text-left text-sm lg:text-xl shadow-lg flex gap-2 lg:gap-3 rounded-r items-center rounded-full px-2 lg:px-4 py-1 lg:py-2`}
                      >
                        <Image
                          className="rounded-full w-10 h-10 lg:w-[100px] lg:h-[100px]"
                          src={`/products-images${product.image}`}
                          alt={product.name}
                          loading="lazy"
                          width={100}
                          height={100}
                        />
                        <span className="line-clamp-2">{product.name}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleNextSlide}
              className={`mt-4 ${
                canScrollNext 
                  ? "bg-green-400 hover:bg-green-400/90" 
                  : "bg-zinc-300 dark:bg-zinc-600"
              } rounded-full`}
              disabled={!canScrollNext}
            >
              <ArrowRight className="h-6 lg:h-8 text-white w-6 lg:w-8 p-1 lg:p-2 rotate-90" />
            </button>
          </div>

          {/* Decorative blurs */}
          <div className="w-[300px] absolute -left-[13rem] bottom-4 h-[300px] bg-orange-300/60 dark:bg-orange-400/30 rounded-full blur-3xl" />
          <div className="w-[300px] absolute -left-[13rem] top-4  h-[100px] bg-orange-300/60 dark:bg-orange-400/30 rounded-full blur-3xl" />
          <div className="w-[400px] absolute right-4 -bottom-32 h-[307px] bg-[#C0E8A6]/60 dark:bg-green-400/20 rounded-full blur-2xl" />
          <div className="w-[300px] absolute -right-[11rem] top-[40px] h-[207px] bg-[#C0E8A6]/60 dark:bg-green-400/20 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;