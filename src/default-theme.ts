import { ITheme } from './models'

const defaultTheme: ITheme = {
  borderRadius: '20px',
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
      successLight: '#D2ECE6',
      ongoing: '#7E8FBA',
      ongoingLight: '#E5E9F1',
      attemptOngoing: '#F7B500',
      attemptOngoingLight: '#FDF1CA',
      error: '#D92D52',
      errorLight: '#F8D5DC'
    }
  }
}

export default defaultTheme
