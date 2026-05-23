"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

import { products } from "@/app/data/product";




const relatedProducts = [
    {
        image: "/bracelets.jpg",
        title: "Luxury Bracelet",
        price: "₦38,000",
    },
    {
        image: "/necklace3.jpg",
        title: "Pearl Necklace",
        price: "₦55,000",
    },
    {
        image: "/rings.jpg",
        title: "Classic Ring",
        price: "₦42,000",
    },
    {
        image: "/gold-earing1.jpg",
        title: "Gold Earrings",
        price: "₦28,000",
    },
];

export default function Page() {
    const params = useParams();
const { addToCart } = useCart();
const router = useRouter();
    const product = products.find((item) => item.slug === params.slug);

    if (!product) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                Product not found
            </div>
        );
    }

    const [activeImage, setActiveImage] = useState(product.images[0]);

    const [selectedMaterial, setSelectedMaterial] = useState(
        product.materials[0],
    );

    return (
        <div className="w-full bg-[#F9F6F1] min-h-screen text-[#2B2B2B]">
            {/* PAGE CONTAINER */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10">
                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* LEFT — IMAGE SECTION */}
                    <div className="flex gap-4 md:gap-6">
                        {/* THUMBNAILS */}
                        <div className="flex flex-col gap-4">
                            {product.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(img)}
                                    className={`relative w-[70px] h-[90px] rounded-2xl overflow-hidden border-2 transition ${
                                        activeImage === img
                                            ? "border-[#735B24]"
                                            : "border-transparent"
                                    }`}
                                >
                                    <Image
                                        src={img}
                                        alt="Thumbnail"
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* ACTIVE IMAGE */}
                        <div className="relative flex-1 h-[500px] md:h-[650px] rounded-3xl overflow-hidden bg-[#EFE8DF]">
                            <Image
                                src={activeImage}
                                alt={product.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT — PRODUCT DETAILS */}
                    <div className="flex flex-col justify-start pt-2">
                        {/* REVIEWS */}
                        <div className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-5">
                            <Icon
                                icon="mdi:star"
                                className="text-[#C79A3B]"
                                width={18}
                            />

                            <span className="font-medium text-[#2B2B2B]">
                                {product.rating}
                            </span>

                            <span>({product.reviews} Reviews)</span>
                        </div>

                        {/* TITLE */}
                        <h1 className="text-[34px] md:text-[48px] font-semibold leading-tight mb-4">
                            {product.title}
                        </h1>

                        {/* PRICE */}
                        <p className="text-[28px] font-medium text-[#735B24] mb-6">
                            {product.price}
                        </p>

                        {/* DESCRIPTION */}
                        <p className="text-[15px] md:text-[16px] leading-7 text-[#5B5B5B] max-w-[500px] mb-8">
                            {product.description}
                        </p>

                        {/* MATERIAL CARD */}
                        <div className="bg-[#EFE8DF] rounded-2xl p-5 mb-8 max-w-[520px]">
                            <p className="text-sm font-medium mb-4">
                                Select Material
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {product.materials.map((material, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setSelectedMaterial(material)
                                        }
                                        className={`px-5 py-3 rounded-xl border transition text-sm ${
                                            selectedMaterial === material
                                                ? "bg-[#735B24] text-white border-[#735B24]"
                                                : "bg-white border-[#D7CEC3] text-[#2B2B2B]"
                                        }`}
                                    >
                                        {material}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col gap-4 max-w-[520px]">
                            <button
                                onClick={() => {
                                    addToCart({
                                        slug: product.slug,
                                        title: product.title,
                                        price: product.price,
                                        image: product.images[0],
                                    });

                                    router.push("/cart");
                                }}
                                className="bg-[#735B24] text-white py-4 rounded-xl font-medium hover:bg-[#5F491D] transition"
                            >
                                ADD TO CART
                            </button>

                            <button className="border border-[#D7CEC3] py-4 rounded-xl font-medium hover:bg-[#EFE8DF] transition">
                                SAVE FOR LATER
                            </button>
                        </div>

                        {/* TOTAL */}
                        <div className="flex items-center justify-between max-w-[520px] mt-8 border-t border-[#E2D8CC] pt-6">
                            <p className="text-[#6B6B6B]">Total</p>

                            <h3 className="text-2xl font-semibold text-[#735B24]">
                                {product.price}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* RELATED PRODUCTS */}
                <div className="mt-24">
                    {/* HEADER */}
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <p className="text-[12px] tracking-wide text-[#735B24] mb-2">
                                YOU MAY ALSO LIKE
                            </p>

                            <h2 className="text-3xl md:text-4xl font-semibold mb-2">
                                People also bought
                            </h2>

                            <p className="text-[#6B6B6B] text-sm md:text-base">
                                Check what other people are buying.
                            </p>
                        </div>

                        {/* ARROWS */}
                        <div className="hidden md:flex items-center gap-3">
                            <button className="w-12 h-12 rounded-full border border-[#D7CEC3] flex items-center justify-center hover:bg-[#EFE8DF] transition">
                                <Icon icon="mdi:arrow-left" width={22} />
                            </button>

                            <button className="w-12 h-12 rounded-full border border-[#D7CEC3] flex items-center justify-center hover:bg-[#EFE8DF] transition">
                                <Icon icon="mdi:arrow-right" width={22} />
                            </button>
                        </div>
                    </div>

                    {/* PRODUCTS GRID */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {relatedProducts.map((item, index) => (
                            <Link href="#" key={index} className="group">
                                <div className="relative w-full h-[260px] rounded-2xl overflow-hidden mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <h3 className="font-medium text-[16px] mb-1">
                                    {item.title}
                                </h3>

                                <p className="text-[#735B24] font-medium">
                                    {item.price}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
