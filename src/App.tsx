import React, { useState } from "react"
import "./App.css"
import { CustomLayerCard } from "./components/CustomLayerCard"
import { ThemeProvider } from "@mui/material"
import image from "./asssets/mini_view.svg"
import "./index.css"
import { theme } from "./theme"

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
