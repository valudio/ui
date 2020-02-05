import React from 'react'
import { IBaseProps } from '../../../models'
import Styled from './styles'

const Dropdown: React.FC<IBaseProps> = ({ isHidden, children, className }) => {
  if (isHidden) return null

  return <Styled className={ className || '' }>{ children }</Styled>
}

export default Dropdown
