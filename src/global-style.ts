import { createGlobalStyle } from 'styled-components'
import icons from './assets/fonts/synlab.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Icons';
    src: url(${ icons });
  }
`
