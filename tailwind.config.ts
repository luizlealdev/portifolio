import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: {
                    primary: "var(--foreground)",
                    secondary: "var(--on-foreground)"
                },
                primary: {
                    green: {
                        light: "var(--primary-green-light)",
                        dark: "var(--primary-green-dark)"
                    },
                    blue: "var(--primary-blue)"
                }
            },
            fontFamily: {
                inter: "var(--font-inter), sans-serif",
                jetbrains: "var(--font-jetbrains-mono), monospace",
            },
        },
    },
    plugins: [],
} satisfies Config;
