export interface ITheme {
  borderRadius: string
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
      successLight: string
      ongoing: string
      ongoingLight: string
      attemptOngoing: string
      attemptOngoingLight: string
      error: string
      errorLight: string
    }
  }
}
