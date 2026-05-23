"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { collections, products } from "./data/product";
import Link from "next/link";

export default function Home() {
    const images = ["/collection1.jpg", "/collection2.jpg", "/collection3.jpg", "/img1.jpg"];
    const [index, setIndex] = useState(0);

   const trendingProducts = products.filter((item) => item.trending);

   useEffect(() => {
       const interval = setInterval(() => {
           setIndex((prev) => (prev + 1) % images.length);
       }, 5000);

       return () => clearInterval(interval);
   }, []);

   
    return (
        <div id="home" className="w-full px-6 md:px-16 lg:px-24 py-10">
            <div className="relative w-full h-[70vh] md:h-[85vh] rounded-mb overflow-hidden ">
                <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[80vh] rounded-xl overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={images[index]}
                                alt="Hero Image"
                                fill
                                className="object-cover object-[50%_35%]"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-2xl px-6 md:px-12 text-left">
                        {/* Badge */}
                        <div className="mb-4 px-3 py-1 w-fit rounded-full bg-white/70 backdrop-blur text-[12px] font-medium text-[#735B24]">
                            HANDCRAFTED LEGACY
                        </div>

                        {/* Heading (GRADIENT TEXT) */}
                        <h1
                            className="text-[40px] md:text-[56px] font-semibold leading-tight 
      bg-gradient-to-r from-[#1f1f1f] via-[#3a2f1f] to-[#735B24] 
      bg-clip-text text-transparent"
                        >
                            Refined Jewelry for the Modern Wardrobe.
                        </h1>

                        {/* Subtext (softer gradient) */}
                        <p
                            className="mt-4 text-[16px] md:text-[18px] max-w-md
      bg-gradient-to-r from-[#3a3a3a] to-[#6b5b45]
      bg-clip-text text-transparent"
                        >
                            Jewelry made for your story, not just your style.
                        </p>

                        {/* CTA */}
                        <div className="mt-6">
                            <a
                                href="/collections"
                                className="bg-[#735B24] text-white px-7 py-3 rounded-lg text-sm hover:bg-[#5f491d] transition"
                            >
                                SHOP COLLECTION
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-[204px] py-8 md:py-[100px] bg-white rounded-mb">
                <div className="w-full flex items-end justify-between px-6 md:px-10 lg:px-24 mb-8">
                    <div className="flex flex-col gap-2">
                        <p className="text-[10px] md:text-[12px] leading-[1.6] text-[#735B24]">
                            COLLECTIONS
                        </p>

                        <h2 className="text-2xl md:text-4xl font-bold">
                            Featured Collections
                        </h2>
                    </div>

                    <Link
                        href="/collections"
                        className="text-[14px] md:text-[16px] text-[#5B5B5B] hover:text-[#735B24] transition underline underline-offset-8"
                    >
                        View All Collections →
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8">
                    {collections.map((item, index) => (
                        <Link
                            key={index}
                            href={`/collections/${item.slug || item.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block"
                        >
                            <div className="relative w-full h-[260px] md:h-[380px] rounded-2xl overflow-hidden group cursor-pointer">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="px-4 md:px-[204px] py-8 md:py-[100px] bg-[#f1ede9]  mt-8 rounded-mb">
                <div className="w-full flex items-end justify-between px-6 md:px-10 lg:px-24 mb-8">
                    <div className="flex flex-col gap-2">
                        <p className="text-[10px] md:text-[12px] leading-[1.6] text-[#735B24]">
                            BEST SELLERS
                        </p>

                        <h2 className="text-2xl md:text-4xl font-bold">
                            Trending items just for you{" "}
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {trendingProducts.map((item, index) => (
                        <Link
                            href={`/product/${item.slug}`}
                            key={index}
                            className="relative w-full h-[260px] md:h-[380px] rounded-2xl overflow-hidden group block"
                        >
                            <Image
                                src={item.images[0]}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/20" />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="bg-[#fdeaea] text-[#5B5B5B] w-full py-16 mt-8 rounded-mb">
                <div className="max-w-4xl mx-auto px-6 md:px-10">
                    <div className="flex flex-col items-start text-left">
                        <h4 className="font-bold text-2xl md:text-3xl mb-3">
                            Join the Inner Circle
                        </h4>

                        <p className="text-[14px] leading-6 max-w-md">
                            Stay updated with our latest jewelry drops and
                            exclusive updates.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-lg">
                            <input
                                placeholder="example@email.com"
                                className="flex-1 border border-gray-300 bg-white px-4 py-3 rounded-md text-black outline-none focus:border-[#7b535c]"
                            />

                            <button className="bg-[#7b535c] text-white px-6 py-3 rounded-md hover:bg-[#5f3c43] transition whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f1ede9] text-gray-500 w-full py-16">
                <div className="max-w-[1000px] mx-auto px-4 md:px-6">
                    {/* TOP GRID */}
                    <div className="flex flex-col md:flex-row justify-between gap-12 text-left">
                        {/* BRAND */}
                        <div>
                            <h2 className="font-medium text-[24px] leading-[31px] tracking-[2px] text-[#735B24]">
                                ARONKE.CO
                            </h2>

                            <div className="mt-4 text-[14px] leading-6 max-w-[300px]">
                                <p>
                                    EXCELLENCE IN MATERIAL AND FORM. ESTABLISHED
                                    2024.
                                </p>
                            </div>
                        </div>

                        {/* SHOP */}
                        <div className="text-[14px] max-w-[300px]">
                            <h4 className="font-bold mb-3 text-[#735B24]">
                                SHOP
                            </h4>

                            <div className="flex flex-col space-y-2">
                                {[
                                    "All Jewelry",
                                    "New Arrivals",
                                    "Best Sellers",
                                    "Gifts",
                                ].map((item) => (
                                    <p
                                        key={item}
                                        className="hover:text-[#735B24] cursor-pointer transition"
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* SOCIALS */}
                        <div className="text-[14px] max-w-[300px]">
                            <h4 className="font-bold mb-3 text-[#735B24]">
                                SOCIALS
                            </h4>

                            <div className="flex flex-col space-y-2">
                                {[
                                    "Instagram",
                                    "Facebook",
                                    "Twitter",
                                    "WhatsApp",
                                ].map((item) => (
                                    <p
                                        key={item}
                                        className="hover:text-[#735B24] cursor-pointer transition"
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* SUPPORT */}
                        <div className="text-[14px] max-w-[300px]">
                            <h4 className="font-bold mb-3 text-[#735B24]">
                                SUPPORT
                            </h4>

                            <div className="flex flex-col space-y-2">
                                {[
                                    "Contact Us",
                                    "Shipping & Returns",
                                    "Jewelry Care",
                                    "FAQ",
                                ].map((item) => (
                                    <p
                                        key={item}
                                        className="hover:text-[#735B24] cursor-pointer transition"
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="flex flex-col items-start md:items-center justify-center gap-6 text-gray-400 mt-10 border-t border-gray-300 pt-6">
                        <p className="text-sm text-center">
                            © {new Date().getFullYear()} Aronke.co. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
