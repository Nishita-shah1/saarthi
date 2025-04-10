
import type { Config } from "tailwindcss";

export default {
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
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        saarthiBlue: {
          DEFAULT: '#2E86AB',
          50: '#E5F1F6',
          100: '#C2DCE9',
          200: '#9EC7D9',
          300: '#7AB2CA',
          400: '#569DBA',
          500: '#2E86AB',
          600: '#256D8A',
          700: '#1C5368',
          800: '#133A47',
          900: '#0A2026',
        },
        saarthiAmber: {
          DEFAULT: '#F9A825',
          50: '#FEF6E8',
          100: '#FDECC7',
          200: '#FBDEA5',
          300: '#FAD084',
          400: '#F9C262',
          500: '#F9A825',
          600: '#D4870C',
          700: '#A26609',
          800: '#714506',
          900: '#402703',
        },
        saarthiGreen: {
          DEFAULT: '#81C784',
          50: '#F1F9F1',
          100: '#DCF0DE',
          200: '#C7E7CA',
          300: '#B2DEB5',
          400: '#9DD5A0',
          500: '#81C784',
          600: '#5CB15F',
          700: '#468D49',
          800: '#346836',
          900: '#224423',
        },
        primary: {
          DEFAULT: '#2E86AB',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F9A825',
          foreground: '#1F1F1F',
        },
        accent: {
          DEFAULT: '#81C784',
          foreground: '#1F1F1F',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'wave': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
      },
      fontSize: {
        'xxs': '0.625rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
