import React, { useEffect, useRef, useState } from 'react'
import { isChildNode } from '../../helpers/dom'
import { IBaseProps, IOption } from '../../models'
import Bubble from '../Bubble'
import Icon from '../Icon'
import Dropdown from './Dropdown'
import Styled from './styles'

interface IProps extends IBaseProps {
  labelProp: string
  options: IOption[]
  onChange: (selected: IOption[]) => void
  placeholder?: string
  isDisabled?: boolean
  isInvalid?: boolean
}

const MultiSelect: React.FC<IProps> = props => {
  const { className, labelProp, options, onChange, placeholder, isHidden, style, isInvalid, isDisabled } = props
  const [ selected, setSelected ] = useState<IOption[]>([])
  const [ isOpen, setIsOpen ] = useState(false)
  const isDisabledOrEmpty = isDisabled || !options || !!options && !options.length
  const classNames = `
    ${ className || '' }
    ${ isOpen ? 'open' : '' }
    ${ isInvalid ? 'invalid' : '' }
    ${ isDisabledOrEmpty ? 'disabled' : '' }
  `
  const ref = useRef()

  if (isHidden) return null

  const values = !!selected.length
    ? selected.map((s, i) => <Bubble type="primary" className="value" key={ i }>{ s[labelProp] }</Bubble>)
    : <span className="placeholder">{ placeholder }</span>

  const handleClick = (option: IOption) => {
    const selectedOptions = !!selected.find(s => s.id === option.id)
      ? selected.filter(s => s.id !== option.id)
      : [ ...selected, option ]

    setSelected(selectedOptions)
    onChange(selectedOptions)
  }

  const handleBulkSelect = (filtered?: IOption[]) => {
    const nextSelected = selected.length > 0 ? [] : filtered || options

    setSelected(nextSelected)
    onChange(nextSelected)
  }

  const handleDocumentClick = (event: MouseEvent) => {
    if (isOpen && !isChildNode(ref.current, event.target)) setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
  })

  return (
    <Styled className={ classNames } style={ style } ref={ ref }>
      <section className="wrapper" onClick={ setIsOpen.bind(undefined, !isDisabledOrEmpty && !isOpen) }>
        <div className="values">{ values }</div>
        <Icon className="icon" icon={ isOpen && !isDisabledOrEmpty ? 'up' : 'down' }/>
      </section>
      <Dropdown
        isHidden={ !isOpen || isDisabledOrEmpty }
        options={ options }
        labelProp={ labelProp }
        selected={ selected }
        onClick={ handleClick }
        onBulkSelect={ handleBulkSelect }
      />
    </Styled>
  )
}

export default MultiSelect
