import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
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
                },
                font: {
                    color: "var(--text-color)",
                    primary: "var(--text-title)"
                }
            },
            fontFamily: {
                inter: "var(--font-inter), sans-serif",
                jetbrains: "var(--font-jetbrains-mono), monospace",
            },
            animation: {
                "moving": "moving 2s infinite alternate",
                "gelatine": "gelatine 0.5s ease-in-out",
            }
        },
    },
    plugins: [],
} satisfies Config;
