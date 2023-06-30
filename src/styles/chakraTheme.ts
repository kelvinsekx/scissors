// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
export const colors = {
  brand: {
    "50": "rgba(0, 90, 226, 0.5)",
    "100": "rgba(0, 90, 226, 0.6)",
    "200": "rgba(0, 90, 226, 0.7)",
    "300": "rgba(0, 90, 226, 0.8)",
    "400": "rgba(0, 90, 226, 0.9)",
    "500": "rgba(0, 90, 226, 1)",
  },
};

export const theme = extendTheme({ colors });
