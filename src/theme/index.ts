import { createTheme } from "@mui/material"

export const colors = {
  main: "#21b6a8",
  dark: "#177F75",
  black: "#000000DE"
}

export const theme = createTheme({
  typography: {
    fontSize: 14,
    fontWeightRegular: "400"
  },
  palette: {
    primary: {
      main: colors.main
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          position: "relative",
          "&.checked": {
            border: "1px solid",
            borderColor: colors.dark
          }
        }
      }
    }
  }
})
