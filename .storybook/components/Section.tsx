import { createTheme, Theme, ThemeProvider, Typography } from "@mui/material"
import { FunctionComponent, ReactElement } from "react"
import { theme } from "../../src/theme"

interface ISection {
  themeOptions?: Partial<Theme>
}

export const Section: FunctionComponent<ISection> = ({ themeOptions, children }): ReactElement => {
  const currentTheme = createTheme({ ...theme, ...themeOptions })

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}
