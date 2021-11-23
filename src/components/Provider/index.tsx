import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../default-theme'
import { ITheme } from '../../models'
import LanguageContext from './LanguageContext'

interface IProps {
  theme?: ITheme
  language?: string
}

const Provider: React.FC<IProps> = ({ theme = defaultTheme, language = 'en-US', children }) => (
  <ThemeProvider theme={ theme }>
    <LanguageContext.Provider value={ language }>
      { children }
    </LanguageContext.Provider>
  </ThemeProvider>
)

export default Provider
