import React from 'react'
import { ThemeProvider } from 'styled-components'
import { CalendarProvider } from '../../contexts'
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
      <CalendarProvider>
        { children }
      </CalendarProvider>
    </LanguageContext.Provider>
  </ThemeProvider>
)

export default Provider
