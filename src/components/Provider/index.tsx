import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../default-theme'
import GlobalStyle from '../../global-style'
import { ITheme } from '../../models'
import LanguageContext from './LanguageContext'

interface IProps {
  theme?: ITheme
  language?: string
}

const Provider: React.FC<IProps> = ({ theme = defaultTheme, language = 'en', children }) => (
  <ThemeProvider theme={ theme }>
    <LanguageContext.Provider value={ language }>
      { children }
      <GlobalStyle />
    </LanguageContext.Provider>
  </ThemeProvider>
)

export default Provider
