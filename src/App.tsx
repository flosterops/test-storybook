import React, { useState } from "react"
import "./App.css"
import { CustomLayerCard } from "./components/CustomLayerCard"
import { createTheme, ThemeProvider } from "@mui/material"
import image from "./asssets/mini_view.png"
import "./index.css"

const colors = {
  main: "#21b6a8",
  dark: "#177F75"
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.main
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.main}`,
          borderRadius: "10px",
          position: "relative",
          "&.checked": {
            "&:after": {
              content: "''",
              position: "absolute",
              zIndex: 0,
              top: "-1px",
              left: "-1px",
              right: "-1px",
              bottom: "-1px",
              border: "2px solid",
              borderColor: colors.dark,
              borderRadius: "10px"
            }
          }
        }
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            "box-shadow": "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            border: "none"
          }
        }
      ]
    }
  }
})

function App() {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CustomLayerCard
          checked={checked}
          image={image}
          id="default-card"
          text="I am checkbox label"
          onChange={(e) => {
            setChecked(e.target.checked)
          }}
        />
      </ThemeProvider>
    </div>
  )
}

export default App
