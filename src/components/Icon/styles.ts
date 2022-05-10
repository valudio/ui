import styled from 'styled-components'

export default styled.span`
	height: max-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

  &.clickable {
    cursor: pointer;
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.6;
  }
  &.pdf {
    color: #D94F3E;
  }
  &.img {
    color: #C9353E;
  }
  &.baan {
    color: #449F7F;
  }
  &.xml {
    color: #E8A500;
  }
  &.sap {
    color: #4759C8;
  }
  &.excel {
    color: #50A341;
  }
  &.html {
    color: #E7782D;
  }
  &.ifs {
    color: #449F7F;
  }
  &.txt {
    color: #6575FF;
  }
  &.edi {
    color: #473CB9;
  }
`
