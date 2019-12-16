import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../default-theme'
import GlobalStyle from '../../global-style'
import { ITheme } from '../../models'

interface IProps {
  theme?: ITheme
}

const Provider: React.FC<IProps> = ({ theme = defaultTheme, children }) => (
  <ThemeProvider theme={ theme }>
    { children }
    <GlobalStyle />
  </ThemeProvider>
)

export default Provider
