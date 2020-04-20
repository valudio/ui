import React, { RefObject } from 'react'
import { IBaseProps } from '../../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  parentRef: RefObject<HTMLDivElement>
}

const Dropdown: React.FC<IProps> = ({ isHidden, children, className, parentRef }) => {
  if (isHidden) return null

  const selectContainer = parentRef.current.getBoundingClientRect()
  const dropdownPosition = {
    top: selectContainer.top + 48,
    left: selectContainer.left
  }

  return <Styled className={ className || '' } style={ dropdownPosition } >{ children }</Styled>
}

export default Dropdown
