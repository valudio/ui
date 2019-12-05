import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../default-theme'
import { ITheme } from '../../models'

interface IProps {
  theme: ITheme
}

const Provider: React.FC<IProps> = ({ theme = defaultTheme, children }) => (
  <ThemeProvider theme={ theme }>{ children }</ThemeProvider>
)

export default Provider
