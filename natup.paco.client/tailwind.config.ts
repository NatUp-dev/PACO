import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        turquoise: {
          DEFAULT: "hsl(var(--turquoise))",
          foreground: "hsl(var(--primary-foreground))",
        },
        wheat: {
          DEFAULT: "hsl(var(--wheat))",
          foreground: "hsl(var(--wheat-foreground))",
        },
        carrot: {
          DEFAULT: "hsl(var(--carrot))",
          foreground: "hsl(var(--carrot-foreground))",
        },
        beet: {
          DEFAULT: "hsl(var(--beet))",
          foreground: "hsl(var(--beet-foreground))",
        },   
        potato: {
          DEFAULT: "hsl(var(--potato))",
          foreground: "hsl(var(--potato-foreground))",
        }, 
        cow: {
          DEFAULT: "hsl(var(--cow))",
          foreground: "hsl(var(--cow-foreground))",
        },
        sheep: {
          DEFAULT: "hsl(var(--sheep))",
          foreground: "hsl(var(--sheep-foreground))",
        },
        vegetables: {
          DEFAULT: "hsl(var(--vegetables))",
        },
        blue: {
          50: "#F0FCFF",
          100: "#D4F7FF",
          200: "#AAF0FF",
          300: "#6BE4FF",
          400: "#2AC5E7",
          500: "#14AFD1",
          600: "#0094B5",
          700: "#007A95",
          800: "#00677E",
          900: "#00586B",
          950: "#00586B",
        },
        green: {
          50: "#F7FFE1",
          100: "#EDFFB5",
          200: "#DBFF77",
          300: "#C5F443",
          400: "#B1E02F",
          500: "#95C413",
          600: "#749E00",
          700: "#597900",
          800: "#476100",
          900: "#3D5300",
          950: "#202C00",
        },
        success: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
          950: "#022C22",
        },
        warning: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
          950: "#431407",
        },
        danger: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
        },
        neutral: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
          950: "#0C0A09",
        },
      },
      fontSize: {
        default: "16px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "natup-gradient":
          "linear-gradient(90deg, #B8D04E 0%, #A4C750 30%, #95BF63 43%, #81BB76 58%, #48B49C 70%, #14AFBF 82%, #00ADCD 88%, #00B4DC 93%, #00C0F3 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
