import { ITheme } from './models'

const defaultTheme: ITheme = {
  fontFamily: 'Fira Sans',
  colors: {
    primary: {
      dark: '#006DD5',
      medium: '#008BF8',
      light: '#B2DCFC'
    },
    typography: {
      darkest: '#0F2A41',
      dark: '#424A61',
      medium: '#687494',
      light: '#9FABCB'
    },
    grey: {
      dark: '#D1D6E5',
      medium: '#E8EBF2',
      light: '#F6F6F9'
    },
    system: {
      success: '#249E83',
      ongoing: '#7E8FBA',
      attemptOngoing: '#F7B500',
      error: '#D92D52'
    },
    white: '#FFFFFF'
  }
}

export default defaultTheme
