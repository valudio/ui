/* tslint:disable:jsx-no-lambda */
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { isChildNode } from '../../helpers'
import { IInputProps, IOption } from '../../models'
import Bubble from '../Bubble'
import Icon from '../Icon'
import Dropdown from './Dropdown'
import Styled from './styles'

interface IProps extends IInputProps<IOption[]> {
  labelProp: string
  options: IOption[]
  value: IOption[]
}

const MultiSelect: React.FC<PropsWithChildren<IProps>> = ({
  value, className, labelProp, options, onChange, placeholder, isHidden, style, isInvalid, isDisabled, form
}) => {
  const ref = useRef<HTMLDivElement>()
  const wrapperRef = useRef<HTMLDivElement>()
  const [ isOpen, setIsOpen ] = useState(false)
  const [ query, setQuery ] = useState('')
  const isDisabledOrEmpty = isDisabled || !options || !!options && !options.length
  const classNames = `
    ${ className || '' }
    ${ isOpen ? 'open' : '' }
    ${ isInvalid ? 'invalid' : '' }
    ${ isDisabledOrEmpty ? 'disabled' : '' }
  `

  const values = !!value && !!value.length
    ? value.map((s, i) => <Bubble type="primary" className="value" key={ i }>{ s[labelProp] }</Bubble>)
    : <span className="placeholder">{ placeholder }</span>

  const toggleOpen = (opened: boolean) => {
    setIsOpen(opened)
    if (opened) setQuery('')
  }
  const handleClick = (option: IOption) => {
    const selectedOptions = value.find(s => s.id === option.id)
      ? value.filter(s => s.id !== option.id)
      : [ ...value, option ]

    // setSelected(selectedOptions)
    onChange(selectedOptions)
  }

  const handleBulkSelect = (filtered?: IOption[]) => {
    const nextSelected = value.length > 0 ? [] : filtered || options

    // setSelected(nextSelected)
    onChange(nextSelected)
  }

  const handleDocumentClick = (event: Event) => {
    if (
      (!isChildNode(ref.current, event.target) && ref.current !== event.target) &&
      (!isChildNode(wrapperRef.current, event.target) &&  wrapperRef.current !== event.target)
    ) {
      setIsOpen(false)
      setQuery('')
    }
  }

  useEffect(() => {
    // if (form) form.addEventListener('reset', setSelected.bind(undefined, initialValue ?? []))
    document.addEventListener('click', handleDocumentClick)
  }, [ form ])

  if (isHidden) return null
  return (
    <Styled className={ classNames } style={ style } ref={ ref }>
      <section
        className="wrapper"
        onClick={ () => toggleOpen(!isDisabledOrEmpty && !isOpen) }
        ref={ wrapperRef }
      >
        <div className="values">{ values }</div>
        <Icon className="icon" icon={ isOpen && !isDisabledOrEmpty ? 'up' : 'down' }/>
      </section>
      <Dropdown
        isHidden={ !isOpen || isDisabledOrEmpty }
        options={ options }
        labelProp={ labelProp }
        selected={ value ?? [] }
        query={ query }
        onQueryChange={ setQuery }
        onClick={ handleClick }
        onBulkSelect={ handleBulkSelect }
      />
    </Styled>
  )
}

export default MultiSelect
