import React from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

const Modal: React.FC<IBaseProps> = ({ isHidden, className, style, children }) => {
  if (isHidden) {
    document.body.style.overflow = 'visible'
    return null
  }

  document.body.style.overflow = 'hidden'

  return (
    <Styled className={ className || '' } style={ style }>
      <section className="frame">{ children }</section>
    </Styled>
  )
}

export default Modal
