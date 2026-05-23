"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { products } from "@/app/data/product";

const page = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [visibleItems, setVisibleItems] = useState(8);

    const filteredProducts = useMemo(() => {
        return products.filter((item) => {
            const itemPrice = Number(item.price.replace(/[₦,]/g, ""));

            const categoryMatch =
                selectedCategory === "All" ||
                item.category === selectedCategory;

            let priceMatch = true;

            if (selectedPrice === "Under 30000") {
                priceMatch = itemPrice < 30000;
            }

            if (selectedPrice === "30000 - 50000") {
                priceMatch = itemPrice >= 30000 && itemPrice <= 50000;
            }

            if (selectedPrice === "Above 50000") {
                priceMatch = itemPrice > 50000;
            }

            return categoryMatch && priceMatch;
        });
    }, [selectedCategory, selectedPrice]);

    return (
        <div className="w-full min-h-screen bg-[#F9F6F1] text-[#2B2B2B]">
            {/* HERO */}
            <section className="px-6 md:px-12 lg:px-20 pt-14 pb-10">
                <div className="max-w-[900px] mx-auto text-center">
                    <p className="text-[12px] tracking-[3px] text-[#735B24] uppercase mb-4">
                        Collections
                    </p>

                    <h1 className="text-[42px] md:text-[64px] leading-[1.05] font-semibold mb-6">
                        Shop a Story
                    </h1>

                    <p className="text-[#6B6B6B] text-[15px] md:text-[18px] leading-8 max-w-[700px] mx-auto">
                        A curated collection of timeless jewelry crafted with
                        elegance, intention, and sustainably sourced materials
                        designed to elevate your everyday wardrobe.
                    </p>
                </div>
            </section>

            {/* FILTER BAR */}
            <section className="px-6 md:px-12 lg:px-20 mb-10">
                <div className="border border-[#E2D8CC] rounded-2xl bg-white px-4 md:px-8 py-4 md:py-5">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        {/* LEFT */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            {/* CATEGORY */}
                            <div className="relative w-full sm:w-auto">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) =>
                                        setSelectedCategory(e.target.value)
                                    }
                                    className="appearance-none w-full sm:w-[180px] border border-[#D7CEC3] bg-[#F9F6F1] rounded-xl px-4 py-3 pr-10 text-sm outline-none"
                                >
                                    <option value="All">All Categories</option>
                                    <option value="bracelets">Bracelets</option>
                                    <option value="earrings">Earrings</option>
                                    <option value="necklaces">Necklaces</option>
                                    <option value="rings">Rings</option>
                                </select>

                                <Icon
                                    icon="mdi:chevron-down"
                                    width={20}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]"
                                />
                            </div>

                            {/* PRICE */}
                            <div className="relative w-full sm:w-auto">
                                <select
                                    value={selectedPrice}
                                    onChange={(e) =>
                                        setSelectedPrice(e.target.value)
                                    }
                                    className="appearance-none w-full sm:w-[180px] border border-[#D7CEC3] bg-[#F9F6F1] rounded-xl px-4 py-3 pr-10 text-sm outline-none"
                                >
                                    <option value="All">All Prices</option>
                                    <option value="Under 30000">
                                        Under ₦30,000
                                    </option>
                                    <option value="30000 - 50000">
                                        ₦30,000 - ₦50,000
                                    </option>
                                    <option value="Above 50000">
                                        Above ₦50,000
                                    </option>
                                </select>

                                <Icon
                                    icon="mdi:chevron-down"
                                    width={20}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]"
                                />
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="text-left lg:text-right">
                            <p className="text-xs md:text-sm text-[#6B6B6B]">
                                Showing{" "}
                                <span className="font-medium text-[#2B2B2B]">
                                    {
                                        filteredProducts.slice(0, visibleItems)
                                            .length
                                    }
                                </span>{" "}
                                of{" "}
                                <span className="font-medium text-[#2B2B2B]">
                                    {filteredProducts.length}
                                </span>{" "}
                                items
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="px-6 md:px-12 lg:px-20 pb-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
                    {filteredProducts
                        .slice(0, visibleItems)
                        .map((item, index) => (
                            <Link
                                href={`/product/${item.slug}`}
                                key={index}
                                className="group"
                            >
                                {/* IMAGE */}
                                <div className="relative w-full h-[250px] md:h-[380px] rounded-2xl overflow-hidden mb-4 bg-[#EFE8DF]">
                                    <Image
                                        src={item.images[0]}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* TEXT */}
                                <div>
                                    <h3 className="font-medium text-[15px] md:text-[17px] mb-1">
                                        {item.title}
                                    </h3>

                                    <p className="text-[#735B24] font-medium text-[14px] md:text-[16px]">
                                        {item.price}
                                    </p>
                                </div>
                            </Link>
                        ))}
                </div>

                {/* LOAD MORE */}
                {visibleItems < filteredProducts.length && (
                    <div className="flex justify-center mt-14">
                        <button
                            onClick={() => setVisibleItems((prev) => prev + 8)}
                            className="border border-[#D7CEC3] px-10 py-4 rounded-full text-sm font-medium hover:bg-[#EFE8DF] transition"
                        >
                            LOAD MORE
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default page;
