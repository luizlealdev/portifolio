import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    green: "var(--primary-green)",
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
