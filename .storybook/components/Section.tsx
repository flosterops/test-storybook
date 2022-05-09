import { createTheme, Theme, ThemeProvider, Typography } from "@mui/material"
import { FunctionComponent, ReactElement } from "react"
import { theme } from "../../src/theme"

interface ISection {
  title: string
  description: string
  themeOptions?: Partial<Theme>
}

export const Section: FunctionComponent<ISection> = ({ title, description, themeOptions, children }): ReactElement => {
  const currentTheme = createTheme({ ...theme, ...themeOptions })

  return (
    <ThemeProvider theme={currentTheme}>
      <Typography variant="h3">{title}</Typography>
      <Typography sx={{ padding: "10px 20px" }}>{description}</Typography>
      {children}
    </ThemeProvider>
  )
}
