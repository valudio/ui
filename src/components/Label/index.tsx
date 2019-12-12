import React from 'react'
import Styled from './styles'

interface IProps {
  text: string
  className?: string
}

const Label: React.FC<IProps> = props => {
return <Styled>{ props.text }</Styled>
}

export default Label
