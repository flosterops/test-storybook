import React, { useState } from "react"
import "./App.css"
import { CustomLayerCard } from "./components/CustomLayerCard"
import { ThemeProvider } from "@mui/material"
import "./index.css"
import { theme } from "./theme"
import image from "./asssets/mini_view.png"

function App() {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CustomLayerCard
          checked={checked}
          image={image}
          id="default-card"
          label="I am checkbox label"
          onChange={(e) => {
            setChecked(e.target.checked)
          }}
        />
      </ThemeProvider>
    </div>
  )
}

export default App
