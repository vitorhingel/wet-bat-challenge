import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {}

  interface PaletteOptions {
    brandYellow: PaletteColorOptions;
    brandOrange: PaletteColorOptions;
    brandGreen: PaletteColorOptions;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5F6CAF",
    },
    secondary: {
      main: "#5BBFBA",
    },
    brandYellow: {
      main: "#E7F0C3",
    },
    brandOrange: {
      main: "#F0CF85",
    },
    brandGreen: {
      main: "#A4D4AE",
    },
  },
});
