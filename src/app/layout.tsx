import Overlay from "@/components/Overlay";
import { OverlayProvider } from "@/providers/OverlayProvider";
import { ThemeModeProvider } from "@/providers/ThemeModeProvider";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { SoundProvider } from "@/providers/SoundProvider";
import "@/styles/animations.css";
import "@/styles/globals.css";

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
    title: "Luiz Leal · Portifólio",
    description:
        "Desenvolvedor de apps Android nativo, programo para web quando não tem jeito, e às vezes me aventuro como designer.",
    applicationName: "Portifólio",
    authors: [{ name: "Luiz André Leal", url: "https://luizleal.dev" }],
    creator: "Luiz André Leal",
    metadataBase: new URL("https://www.luizleal.dev"),
    openGraph: {
        title: "Luiz Leal · Portifólio",
        description:
            "Desenvolvedor de apps Android nativo, programo para web quando não tem jeito, e às vezes me aventuro como designer.",
        url: "https://www.luizleal.dev",
        siteName: "Luiz Leal - Portfólio",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "https://www.luizleal.dev/image-preview.png",
                width: 1200,
                height: 630,
                alt: "Luiz Leal - Portfólio",
            },
        ],
    },
    robots: "index, follow",
    category: "Technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning={true}>
            <body
                className={`${jetBrainsMono.variable} ${inter.variable} text-font-color antialiased font-jetbrains`}
            >
                <ThemeModeProvider>
                    <SoundProvider>
                        <OverlayProvider>
                            {children}
                            <Overlay />
                        </OverlayProvider>
                    </SoundProvider>
                </ThemeModeProvider>
            </body>
        </html>
    );
}
