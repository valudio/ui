import React, { useEffect, useRef, useState } from 'react'
import { IBaseProps, IOption } from '../../models'
import Icon from '../Icon'
import Dropdown from './Dropdown'
import Styled from './styles'

import { isChildNode } from '../../helpers/dom'
import Item from './Item'

interface IProps extends IBaseProps {
  labelProp: string
  options: IOption[]
  onChange: (selected: IOption) => void
  placeholder?: string
  isDisabled?: boolean
  isInvalid?: boolean
}

// tslint:disable-next-line: max-line-length
const Select: React.FC<IProps> = ({ isHidden, className, style, isDisabled, isInvalid, options, labelProp, onChange, placeholder }) => {
  if (isHidden) return null

  const ref = useRef()
  const [ isOpen, setIsOpen ] = useState(false)
  const [ selected, setSelected ] = useState<IOption>()
  const isDisabledOrEmpty = isDisabled || !options || !!options && !options.length
  const classNames = `
    ${ className || '' }
    ${ !!selected ? 'filled' : '' }
    ${ isOpen ? 'active' : '' }
    ${ isInvalid ? 'invalid' : '' }
    ${ isDisabledOrEmpty ? 'disabled' : '' }
`

  const handleChange = (option: IOption) => {
    setSelected(option)
    onChange(option)
    setIsOpen(false)
  }

  const items = options.map(x =>
    <Item key={ x.id } isSelected={ selected === x } onClick={ handleChange.bind(undefined, x) }>{ x[labelProp] }</Item>
  )

  const handleDocumentClick = (event: MouseEvent) => {
    if (isOpen && !isChildNode(ref.current, event.target)) setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
  })

  return (
    <Styled
      className={ classNames }
      style={ style }
      onClick={ setIsOpen.bind(undefined, !isDisabledOrEmpty && !isOpen) }
      ref={ ref }
    >
      <span className="value">{ selected && selected[labelProp] || placeholder }</span>
      <Icon className="icon" icon={ isOpen && !isDisabledOrEmpty ? 'up' : 'down' }/>
      <Dropdown isHidden={ !isOpen || isDisabledOrEmpty }>{ items }</Dropdown>
    </Styled>
  )
}

export default Select
