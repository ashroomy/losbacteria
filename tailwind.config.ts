import type { Config } from "tailwindcss";
import { extendedTheme } from './utils/theme'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    ...extendedTheme

  },
  plugins: [],
} satisfies Config;
