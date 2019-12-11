import React, { useEffect, useRef, useState } from 'react'
import { IBaseProps, IOption } from '../../models'
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
  const selectedLabel = selected.map((s, i) => <span key={ i }>{ s[labelProp] }</span>)

  if (isHidden) return null

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: IOption) => {
    !!selected.find(s => s.id === option.id)
    ? setSelected(selected.filter(s => s.id !== option.id))
    : setSelected([ ...selected, option ])

    onChange(selected)
  }

  const handleDocumentClick = (event: MouseEvent) => {
    const openRef = divRef.current
    if (isOpen && !!openRef && event.target !== openRef) {
      setIsOpen(false)
    }
  }

  const optionItems = options.map((o, i) => (
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
      <ul className="options">{ optionItems }</ul>
    </Styled>
  )
}

export default MultiSelect
