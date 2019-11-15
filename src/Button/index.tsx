import React from 'react'
import Styled from './styles'

interface IProps {
  onClick?: () => void
}

const Button: React.FC<IProps> = props => {
  const onClick = props.onClick
  const handleClick = () => onClick && onClick()

  return <Styled onClick={ handleClick }>Click me!</Styled>
}

export default Button
