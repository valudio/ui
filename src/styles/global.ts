import { createGlobalStyle } from 'styled-components'
import iconsTtf from '../assets/fonts/icons.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Icons';
    src: url(${ iconsTtf }) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`
