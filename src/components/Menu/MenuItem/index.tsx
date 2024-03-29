import React, { isValidElement, ReactNode, useEffect, useState } from 'react'
import { IBaseProps, IconName, IDropdownItem } from '../../../models'
import Icon from '../../Icon'
import { StyledButton, StyledList } from './styles'

interface IProps extends IBaseProps {
  icon: IconName | ReactNode
  label: string
  dropdownItems?: IDropdownItem[]
  isActive?: boolean
  onClick?: () => void
  isExpanded?: boolean
  isButton?: boolean
  isDropdown?: boolean
}

const MenuItem: React.FC<IProps> = ({
  isHidden, className, style, icon, label, dropdownItems, isActive, onClick, isExpanded, isButton, isDropdown
}) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  const handleClick = () => {
    if (isDropdown) toggleOpen()
    if (onClick && typeof onClick === 'function') onClick()
  }

  const badge = isValidElement(icon)
    ? icon
    : <Icon className="icon" icon={ icon as IconName } onClick={ handleClick } />
  const classNames =
    `${ className || '' } ${ isActive && 'active' } ${ isButton && 'button' } ${ isDropdown && 'dropdown' }`
  const expandedLabel = isExpanded && <span className="label">{ label }</span>
  const dropdownIcon =
    (isExpanded && isDropdown) && <Icon icon={ `dropdown-icon ${ isOpen ? 'up' : 'down' }` as IconName } />
  const items = dropdownItems
    && dropdownItems.map((item, i) => (
        <li key={ i } className={ `dropdown-item ${ item.isActive && 'active' }` } onClick={ item.onClick }>
          { item.label }
        </li>
      ))
  const dropdownList = isDropdown
    && <StyledList className={ `dropdown-list ${ isOpen && 'open' }` }>{ items }</StyledList>

  useEffect(() => {
    if (isDropdown && !isExpanded) setIsOpen(false)
  }, [ isExpanded, isDropdown ])

  if (isHidden) return null
  return (
    <>
      <StyledButton className={ classNames } style={ style } onClick={ handleClick }>
        { badge }
        { expandedLabel }
        { dropdownIcon }
      </StyledButton>
      { dropdownList }
    </>
  )
}

export default MenuItem
