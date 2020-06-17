import React, { isValidElement, ReactNode, useState } from 'react'
import { IBaseProps, IconName } from '../../../models'
import Icon from '../../Icon'
import { StyledButton, StyledList } from './styles'

interface IProps extends IBaseProps {
  icon: IconName | ReactNode
  label: string
  isActive?: boolean
  onClick?: () => void
  isExpanded?: boolean
  isButton?: boolean
  isDrodown?: boolean
}

const MenuItem: React.FC<IProps> = ({ isHidden, className, style, icon, label, isActive, onClick, isExpanded, isButton, isDrodown, children }) => {
  if (isHidden) return null

  const [isOpen, setIsOpen] = useState(false)
  const badge = isValidElement(icon) ? icon : <Icon className="icon" icon={ icon as IconName } />
  const classNames = `${ className || '' } ${isActive ? 'active' : ''} ${ isButton ? 'button' : '' }`
  const expandedLabel = isExpanded && <span className="label">{ label }</span>
  const dropdownIcon = (isExpanded && isDrodown) && <Icon icon={ `dropdown-icon ${ isOpen ? 'up' : 'down' }` as IconName } />
  const dropdownItems = isDrodown && <StyledList className={ `dropdown-items ${ isOpen && 'open' }` }>{ children }</StyledList>

  const toggleOpen = () => setIsOpen(!isOpen)
  const handleClick = () => isDrodown ? toggleOpen() : onClick()

  return (
    <>
      <StyledButton className={ classNames } style={ style } onClick={ handleClick }>
        { badge }
        { expandedLabel }
        { dropdownIcon }
      </StyledButton>
      { dropdownItems }
    </>
  )
}

export default MenuItem
