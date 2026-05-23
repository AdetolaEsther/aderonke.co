import Navbar from "./componets/layout/NavBar";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "./context/CartContext";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="min-h-screen bg-[#F9F6F1] text-[#171717]">
                <CartProvider>
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-1">{children}</main>
                    </div>
                </CartProvider>
            </body>
        </html>
    );
}
