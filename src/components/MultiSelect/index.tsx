import React, { useState } from 'react'
import { IBaseProps, IOption } from '../../models'
import Icon from '../Icon'
import Label from '../Label'
import Dropdown from './Dropdown'
import Styled from './styles'

interface IProps extends IBaseProps {
  labelProp: string
  options: IOption[]
  onChange: (selected: IOption[]) => void
  placeholder?: string
  isInvalid?: boolean
}

const MultiSelect: React.FC<IProps> = ({ className, labelProp, options, onChange, placeholder, isHidden, style }) => {
  const [ selected, setSelected ] = useState<IOption[]>([])
  const [ isOpen, setIsOpen ] = useState(false)

  if (isHidden) return null

  const values = !!selected.length
    ? selected.map((s, i) => <Label type="primary" className="value" key={ i }>{ s[labelProp] }</Label>)
    : <span className="placeholder">{ placeholder }</span>

  const handleClick = (option: IOption) => {
    const selectedOptions = !!selected.find(s => s.id === option.id)
      ? selected.filter(s => s.id !== option.id)
      : [ ...selected, option ]

    setSelected(selectedOptions)
    onChange(selectedOptions)
  }

  const handleBulkSelect = () => {
    selected.length === options.length ? setSelected([]) : setSelected(options)
  }

  return (
    <Styled className={ className } style={ style }>
      <div className="values" onClick={ setIsOpen.bind(undefined, !isOpen) }>{ values }</div>
      <Icon className="icon" icon={ isOpen ? 'up' : 'down' }/>
      <Dropdown
        isHidden={ !isOpen }
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
