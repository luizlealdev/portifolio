import type {Metadata} from "next";
import {Inter, JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Overlay from "@/components/Overlay";
import {OverlayProvider} from "@/contexts/OverlayContext";

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    weight: "400",
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Luiz Leal - Portifolio",
    description: "Descrição do portifolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
        <body
            className={`${jetBrainsMono.variable} ${inter.variable} antialiased text-white/80 font-jetbrains`}
        >

        <OverlayProvider>
            {children}
            <Overlay/>
        </OverlayProvider>
        </body>
        </html>
    );
}
