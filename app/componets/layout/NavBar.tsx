"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 z-20 bg-[#FDF9F5] border-b border-[#E8E2D9]">
            <nav className="relative w-full px-6 lg:px-16 h-[72px] flex items-center justify-between">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-[#2B2B2B]"
                >
                    <Icon
                        icon={
                            isOpen
                                ? "material-symbols:close-rounded"
                                : "material-symbols:menu-rounded"
                        }
                        width={28}
                    />
                </button>

                <div className="hidden md:flex items-center">
                    <Link
                        href="/"
                        className="font-medium text-[24px] leading-[31px] tracking-[2px] text-[#735B24] "
                    >
                        ADERONKE.CO
                    </Link>
                </div>

                <div className="md:hidden absolute left-1/2 -translate-x-1/2">
                    <Link
                        href="/"
                        className="font-medium text-[18px] tracking-[2px] text-[#735B24]"
                    >
                        ADERONKE.CO
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                    <a
                        href="/"
                        className="text-[#735B24] text-[15px] font-medium tracking-wide"
                    >
                        Shop
                    </a>

                    <a
                        className="text-[#8E8E8E] hover:text-[#735B24] transition-colors text-[15px]"
                        href="/collections"
                    >
                        Collections
                    </a>

                    <a className="text-[#8E8E8E] hover:text-[#735B24] transition-colors text-[15px]" href="/custom">
                        Custom
                    </a>

                    <a className="text-[#8E8E8E] hover:text-[#735B24] transition-colors text-[15px]" href="/about">
                        About
                    </a>
                </div>

                <div className="flex items-center gap-5 ml-auto">
                    <button className="hidden md:flex text-[#5F5F5F] hover:text-[#735B24] transition">
                        <Icon icon="mdi:magnify" width={22} />
                    </button>

                    <button className="text-[#5F5F5F] hover:text-[#735B24] transition">
                        <Icon icon="mdi:shopping-outline" width={22} />
                    </button>
                </div>

                {isOpen && (
                    <div className="absolute top-[72px] left-0 w-full bg-[#FDF9F5] border-b border-[#E8E2D9] px-6 py-8 flex flex-col gap-6 md:hidden">
                        <a
                            href="/"
                            className="text-[#735B24] text-[16px] font-medium"
                        >
                            Shop
                        </a>

                        <a className="text-left text-[#8E8E8E] hover:text-[#735B24] transition" href="/collections">
                            Collections
                        </a>

                        <a className="text-left text-[#8E8E8E] hover:text-[#735B24] transition" href="/custom">
                            Custom
                        </a>

                        <a className="text-left text-[#8E8E8E] hover:text-[#735B24] transition" href="/about">
                            About
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
