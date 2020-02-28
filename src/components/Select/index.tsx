import React, { useEffect, useRef, useState } from 'react'
import { IInputProps, IOption } from '../../models'
import Icon from '../Icon'
import Dropdown from './Dropdown'
import Styled from './styles'

import { isChildNode } from '../../helpers/dom'
import Item from './Item'

interface IProps extends IInputProps<IOption> {
  labelProp: string
  options: IOption[]
}

// tslint:disable-next-line: max-line-length
const Select: React.FC<IProps> = ({ isHidden, className, style, isDisabled, isInvalid, options, labelProp, onChange, placeholder, initialValue, form }) => {
  if (isHidden) return null

  const ref = useRef<HTMLDivElement>()
  const [ isOpen, setIsOpen ] = useState(false)
  const [ selected, setSelected ] = useState<IOption | void>(initialValue)
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

  const handleDocumentClick = (event: Event) => {
    if ((isOpen && !isChildNode(ref.current, event.target)) || ref.current !== event.target) setIsOpen(false)
  }

  useEffect(() => {
    if (form) form.addEventListener('reset', setSelected.bind(undefined, initialValue ?? []))
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [ form ])

  return (
    <Styled
      className={ classNames }
      style={ style }
      onClick={ setIsOpen.bind(undefined, !isDisabledOrEmpty && !isOpen) }
      ref={ ref }
    >
      {/* <span className="value">{ selected && selected[labelProp] || placeholder }</span> */}
      <input className="value" placeholder={ placeholder } readOnly value={ selected && selected[labelProp] } />
      <Icon className="icon" icon={ isOpen && !isDisabledOrEmpty ? 'up' : 'down' }/>
      <Dropdown isHidden={ !isOpen || isDisabledOrEmpty }>{ items }</Dropdown>
    </Styled>
  )
}

export default Select
