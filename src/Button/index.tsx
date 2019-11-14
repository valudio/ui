import React from 'react'

export interface IProps {
  color: string
  onClick?: (color: string) => void
}

export default (props: IProps) => {
  const { color, onClick } = props;
  const handleClick = () => onClick && onClick(color)

  return <button style={{ color }} onClick={ handleClick }>Color Button</button>
}
