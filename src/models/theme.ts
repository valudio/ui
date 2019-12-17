export interface ITheme {
  fontFamily: string
  colors: {
    primary: {
      dark: string
      medium: string
      light: string
    },
    typography: {
      darkest: string
      dark: string
      medium: string
      light: string
    },
    grey: {
      dark: string
      medium: string
      light: string
    },
    system: {
      success: string
      ongoing: string
      attemptOngoing: string
      error: string
    },
    white: string
  }
}
