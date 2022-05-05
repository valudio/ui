import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
// import { CalendarProvider } from '../../contexts'
import defaultTheme from '../../default-theme'
import { ITheme } from '../../models'
import LanguageContext from './LanguageContext'

interface IProps {
  theme?: ITheme
  language?: string
}

const Provider: React.FC<PropsWithChildren<IProps>> = ({ theme = defaultTheme, language = 'en-US', children }) => (
  <ThemeProvider theme={ theme }>
    <LanguageContext.Provider value={ language }>
      { children }
    </LanguageContext.Provider>
  </ThemeProvider>
)

export default Provider
