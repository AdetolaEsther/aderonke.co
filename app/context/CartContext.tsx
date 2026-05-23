"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
    slug: string;
    title: string;
    price: string;
    image: string;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    removeFromCart: (slug: string) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) setCart(JSON.parse(stored));
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: Omit<CartItem, "quantity">) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.slug === item.slug);

            if (existing) {
                return prev.map((p) =>
                    p.slug === item.slug
                        ? { ...p, quantity: p.quantity + 1 }
                        : p,
                );
            }

            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (slug: string) => {
        setCart((prev) => prev.filter((item) => item.slug !== slug));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
}
