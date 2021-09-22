import { createGlobalStyle } from 'styled-components'
import iconsTtf from '../assets/fonts/icons.ttf'
import iconsWoff from '../assets/fonts/icons.woff'
import iconsEot from '../assets/fonts/icons.eot'
import iconsSvg from '../assets/fonts/icons.svg'

export default createGlobalStyle`
  @font-face {
    font-family: 'Icons';
    src: url(${ iconsEot });
    src: url(${ iconsEot }) format("embedded-opentype"),
      url(${ iconsWoff }) format("woff"),
      url(${ iconsTtf }) format("truetype"),
      url(${ iconsSvg }) format("svg");
    font-weight: normal;
    font-style: normal;
  }
`
