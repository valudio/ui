import React, { ChangeEvent } from 'react'
import Styled from './styles'

interface IProps {
  onChange?: (value: string) => void
}

const Input: React.FC<IProps> = props => {
  const { onChange } = props
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.currentTarget.value)

  return <Styled onChange={ handleChange } />
}

export default Input
