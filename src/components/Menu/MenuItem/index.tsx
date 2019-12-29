import React, { isValidElement, ReactNode } from 'react'
import { IBaseProps, IconName } from '../../../models'
import Icon from '../../Icon'
import Styled from './styles'

interface IProps extends IBaseProps {
  icon: IconName | ReactNode
  label: string
  onClick?: () => void
  isExpanded?: boolean
}

const MenuItem: React.FC<IProps> = ({ isHidden, className, style, icon, label, onClick, isExpanded }) => {
  if (isHidden) return null

  const badge = isValidElement(icon) ? icon : <Icon className="icon" icon={ icon as IconName } />
  const expandedLabel = isExpanded && <span className="label">{ label }</span>

  return (
    <Styled className={ className || '' } style={ style } onClick={ onClick }>
      { badge }
      { expandedLabel }
    </Styled>
  )
}

export default MenuItem
