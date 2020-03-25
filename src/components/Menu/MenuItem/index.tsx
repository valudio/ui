import React, { isValidElement, ReactNode } from 'react'
import { IBaseProps, IconName } from '../../../models'
import Icon from '../../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  icon: IconName | ReactNode
  label: string
  isActive?: boolean
  onClick?: () => void
  isExpanded?: boolean
  isButton?: boolean
}

const MenuItem: React.FC<IProps> = ({ isHidden, className, style, icon, label, isActive, onClick, isExpanded, isButton }) => {
  if (isHidden) return null

  const badge = isValidElement(icon) ? icon : <Icon className="icon" icon={ icon as IconName } />
  const expandedLabel = isExpanded && <span className="label">{ label }</span>
  const classNames = `${ className || '' } ${isActive ? 'active' : ''} ${ isButton ? 'button' : '' }`

  return (
    <Styled className={ classNames } style={ style } onClick={ onClick }>
      { badge }
      { expandedLabel }
    </Styled>
  )
}

export default MenuItem
