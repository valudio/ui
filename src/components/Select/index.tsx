import React, { useEffect, useRef, useState } from 'react'
import { IInputProps, IOption } from '../../models'
import Icon from '../Icon'
import { isChildNode } from '../../helpers'
import Dropdown from './Dropdown'
import Styled from './styles'
import Item from './Item'

interface IProps extends IInputProps<IOption> {
  labelProp: string
  options: IOption[]
  value?: IOption
}

// tslint:disable: max-line-length
const Select: React.FC<IProps> = ({
  value, isHidden, className, style, isDisabled, isInvalid, options, labelProp, onChange, placeholder, form
}) => {
  const ref = useRef<HTMLDivElement>()
  const [ isOpen, setIsOpen ] = useState(false)
  // const [ selected, setSelected ] = useState<IOption | void>(initialValue)
  const isDisabledOrEmpty = isDisabled || !options || !!options && !options.length
  const classNames = `
    select-container
    ${ className || '' }
    ${ value ? 'filled' : '' }
    ${ isOpen ? 'active' : '' }
    ${ isInvalid ? 'invalid' : '' }
    ${ isDisabledOrEmpty ? 'disabled' : '' }
`

  const handleChange = (option: IOption) => {
    // setSelected(option)
    onChange(option)
    setIsOpen(false)
  }

  const handleIconClick = (event: MouseEvent) => {
    event.stopPropagation()
    setIsOpen(!isDisabledOrEmpty && !isOpen)
  }

  const items = options.map(x =>
    <Item key={ x.id } isSelected={ value?.id === x.id } onClick={ handleChange.bind(undefined, x) }>
      { x[labelProp] }
    </Item>
  )

  const handleDocumentClick = (event: Event) => {
    if ((isOpen && !isChildNode(ref.current, event.target)) || ref.current !== event.target) setIsOpen(false)
  }

  useEffect(() => {
    // if (form) form.addEventListener('reset', setSelected.bind(undefined, initialValue ?? []))
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ form ])

  // useEffect(() => {
  //   if (initialValue !== selected) setSelected(initialValue)
  // }, [initialValue])
  if (isHidden) return null
  return (
    <Styled
      className={ classNames }
      style={ style }
      onClick={ setIsOpen.bind(undefined, !isDisabledOrEmpty && !isOpen) }
      ref={ ref }
    >
      {/* <span className="value">{ selected && selected[labelProp] || placeholder }</span> */}
      <input className="value" placeholder={ placeholder } readOnly value={ value ? value[labelProp] : '' } />
      <Icon className="icon" icon={ isOpen && !isDisabledOrEmpty ? 'up' : 'down' } onClick={ handleIconClick }/>
      <Dropdown parentRef={ ref } isHidden={ !isOpen || isDisabledOrEmpty }>{ items }</Dropdown>
    </Styled>
  )
}

export default Select
