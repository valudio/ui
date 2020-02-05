import React from 'react'
import { IBaseProps } from '../../models'
import Styled from './styles'

interface IProps extends IBaseProps {
  onOverlayClick?: () => void
}

const Modal: React.FC<IProps> = ({ isHidden, className, style, children, onOverlayClick }) => {
  if (isHidden) {
    document.body.style.overflow = 'visible'
    return null
  } else {
    document.body.style.overflow = 'hidden'
  }

  const classNames = `frame ${ className || '' }`

  const handleOverlayClick = ({ currentTarget, target }: MouseEvent) => {
    if (!onOverlayClick || currentTarget !== target) return
    onOverlayClick()
  }

  return (
    <Styled className={ classNames } style={ style } onClick={ handleOverlayClick }>
      <section className="frame">{ children }</section>
    </Styled>
  )
}

export default Modal
