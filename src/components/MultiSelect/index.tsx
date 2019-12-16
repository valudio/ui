import React, { useEffect, useRef, useState } from 'react'
import { IBaseProps, IOption } from '../../models'
import Icon from '../Icon'
import Label from '../Label'
import Item from './Item'
import Styled from './styles'

interface IProps extends IBaseProps {
  labelProp: string
  options: IOption[]
  onChange: (selected: IOption[]) => void
  placeholder?: string
  isInvalid?: boolean
}

const MultiSelect: React.FC<IProps> = props => {
  const { labelProp, options, onChange, placeholder, isInvalid, isHidden } = props
  const [ selected, setSelected ] = useState<IOption[]>([])
  const [ isOpen, setIsOpen ] = useState(false)
  const divRef = useRef(null)
  const classNames =  `${ isOpen ? 'opened' : '' } ${ !options || !options.length ? 'disabled' : '' } ${ isInvalid ? 'invalid' : '' }`
  const selectedLabel = selected.map((s, i) => <Label type="primary" key={ i }>{ s[labelProp] }</Label>)

  if (isHidden) return null

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: IOption) => {
    const selectedOptions = !!selected.find(s => s.id === option.id)
      ? selected.filter(s => s.id !== option.id)
      : [ ...selected, option ]

    setSelected(selectedOptions)
    onChange(selectedOptions)
  }

  const handleDocumentClick = (event: MouseEvent) => {
    const openRef = divRef.current
    if (isOpen && !!openRef && event.target !== openRef) setIsOpen(false)
  }

  const dropdownIcon = isOpen ? 'up' : 'down'

  const optionItems = isOpen && options.map((o, i) => (
    <Item
      key={ i }
      label={ o[labelProp] }
      isSelected={ !!selected.find(s => s.id === o.id) }
      onClick={ handleOptionClick.bind(this, o) }
    />
  ))

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
  })

  return (
    <Styled className={ classNames }>
      <div className="selected" ref={ divRef } data-text={ placeholder } onClick={ handleOpen }>
        { selectedLabel }
      </div>
      <Icon className="dropdown-icon" icon={ dropdownIcon }/>
      <ul className="options">{ optionItems }</ul>
    </Styled>
  )
}

export default MultiSelect
