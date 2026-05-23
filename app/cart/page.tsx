"use client";

import React from "react";
import Image from "next/image";

const page = () => {
    return (
        <div className="w-full min-h-screen bg-[#F9F6F1] text-[#2B2B2B]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10">
                {/* PAGE TITLE */}
                <h1 className="text-[32px] md:text-[42px] font-semibold mb-2">
                    Checkout
                </h1>

                {/* STEPS */}
                <div className="flex gap-4 text-sm text-[#6B6B6B] mb-10">
                    <p className="font-medium text-[#2B2B2B]">Shipping</p>
                    <span>→</span>
                    <p>Delivery</p>
                    <span>→</span>
                    <p>Payment</p>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* LEFT - FORM */}
                    <div>
                        {/* FORM */}
                        <div className="bg-white border border-[#E2D8CC] rounded-2xl p-6 space-y-4">
                            {/* FIRST / LAST NAME */}
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    placeholder="First Name"
                                    className="border border-[#D7CEC3] rounded-xl px-4 py-3 outline-none"
                                />
                                <input
                                    placeholder="Last Name"
                                    className="border border-[#D7CEC3] rounded-xl px-4 py-3 outline-none"
                                />
                            </div>

                            {/* STREET */}
                            <input
                                placeholder="Street Address"
                                className="w-full border border-[#D7CEC3] rounded-xl px-4 py-3 outline-none"
                            />

                            {/* CITY / ZIP */}
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    placeholder="City"
                                    className="border border-[#D7CEC3] rounded-xl px-4 py-3 outline-none"
                                />
                                <input
                                    placeholder="ZIP Code"
                                    className="border border-[#D7CEC3] rounded-xl px-4 py-3 outline-none"
                                />
                            </div>
                        </div>

                        {/* GIFT OPTION */}
                        <div className="mt-6 bg-[#EFE8DF] border border-[#D7CEC3] rounded-2xl p-5">
                            <p className="font-medium mb-2">Gift Option</p>

                            <p className="text-sm text-[#6B6B6B] mb-3">
                                Give this order as a gift to someone special.
                            </p>

                            <button className="text-sm font-medium underline">
                                Customize delivery
                            </button>
                        </div>

                        {/* FEATURES */}
                        <div className="mt-6 text-sm text-[#6B6B6B] space-y-2">
                            <p>✔ Fast delivery</p>
                            <p>✔ Authenticity guaranteed</p>
                            <p>✔ No watermark / premium packaging</p>
                        </div>

                        {/* CONTINUE */}
                        <button className="mt-8 w-full bg-[#735B24] text-white py-4 rounded-xl font-medium hover:bg-[#5F491D] transition">
                            Continue to Delivery
                        </button>
                    </div>

                    {/* RIGHT - ORDER SUMMARY */}
                    <div>
                        <div className="bg-white border border-[#E2D8CC] rounded-2xl p-6">
                            <h2 className="text-lg font-semibold mb-6">
                                Order Summary
                            </h2>

                            {/* ITEM */}
                            <div className="flex gap-4 mb-6">
                                <div className="relative w-[80px] h-[80px] rounded-xl overflow-hidden">
                                    <Image
                                        src="/rings2.png"
                                        alt="product"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="font-medium">
                                        Classic Gold Ring
                                    </p>
                                    <p className="text-sm text-[#6B6B6B]">
                                        18K Gold
                                    </p>
                                    <p className="text-[#735B24] font-medium">
                                        ₦45,000
                                    </p>
                                </div>
                            </div>

                            {/* COSTS */}
                            <div className="space-y-3 text-sm border-t pt-4">
                                <div className="flex justify-between">
                                    <p>Subtotal</p>
                                    <p>₦45,000</p>
                                </div>

                                <div className="flex justify-between">
                                    <p>Shipping</p>
                                    <p>₦2,500</p>
                                </div>

                                <div className="flex justify-between font-semibold text-base pt-3 border-t">
                                    <p>Total</p>
                                    <p>₦47,500</p>
                                </div>
                            </div>

                            {/* PROMO */}
                            <div className="mt-6">
                                <input
                                    placeholder="Promo code"
                                    className="w-full border border-[#D7CEC3] rounded-xl px-4 py-3 outline-none"
                                />
                                <button className="mt-3 w-full border border-[#D7CEC3] py-3 rounded-xl text-sm hover:bg-[#EFE8DF] transition">
                                    Apply Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
