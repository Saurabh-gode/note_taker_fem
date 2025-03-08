import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/**/*.{js,jsx,ts,tsx,mdx}',
        './app/**/*.{js,jsx,ts,tsx,mdx}',
        './components/**/*.{js,jsx,ts,tsx,mdx}',
        './pages/**/*.{js,jsx,ts,tsx,mdx}',
        './public/**/*.html'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Arial', 'sans-serif'],
                serif: ['Noto Serif', 'Georgia', 'serif'],
                mono: ['Source Code Pro', 'Courier New', 'monospace'],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                blue: {
                    50: "#EBF1FF",
                    500: "#335CFF",
                    700: "#2547D0",
                },
                neutral: {
                    0: "#FFFFFF",
                    50: "#F5F7FA",
                    100: "#F3F5F8",
                    200: "#E0E4EA",
                    300: "#CACFD8",
                    400: "#99A0AE",
                    500: "#717784",
                    600: "#525866",
                    700: "#2B303B",
                    800: "#232530",
                    900: "#191B25",
                    950: "#0E121B",
                },
                green: {
                    100: "#D1FBE9",
                    500: "#21C16B",
                },
                red: {
                    100: "#FFD5D8",
                    500: "#FB3748",
                },
            },
            gridTemplateColumns: {
                "12": "repeat(12, minmax(70px, 1fr))",
            },
        }
    },
    plugins: [],
};

export default config;
