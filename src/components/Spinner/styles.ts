import styled from 'styled-components'
import { bounceAnimation } from '../../styles/animations'

export default styled.article`
  width: 60px;
  height: 60px;
  position: relative;
  margin: auto;

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${ ({ theme }) => theme.colors.primary.medium };
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${ bounceAnimation } 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    animation-delay: -1.0s;
  }
`
