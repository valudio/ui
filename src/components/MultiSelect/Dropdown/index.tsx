import React, { ChangeEvent, useState } from 'react'
import { IBaseProps, IOption } from '../../../models'
import Item from '../Item'
import Styled from './styles'

interface IProps extends IBaseProps {
  labelProp: string
  options: IOption[]
  selected: IOption[]
  onBulkSelect: () => void
  onClick: (option: IOption) => void
}

const Dropdown: React.FC<IProps> = ({ isHidden, options, labelProp, selected, onClick, onBulkSelect }) => {
  const [ query, setQuery ] = useState('')
  const bulkLabel = options.length === selected.length ? 'Unselect all' : 'Select all'
  if (isHidden) return null

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value)
  }

  const optionItems = options.map((x, i) => (
    <Item
      key={ i }
      label={ x[labelProp] }
      isSelected={ !!selected.find(s => s.id === x.id) }
      onClick={ onClick.bind(undefined, x) }
      isHidden={ !x[labelProp].toLowerCase().includes(query.toLowerCase()) }
    />
  ))

  return (
    <Styled>
      <button className="bulk-select" onClick={ onBulkSelect }>{ bulkLabel }</button>
      <input className="input" onChange={ handleChange } placeholder="Search..." />
      <ul className="options">{ optionItems }</ul>
    </Styled>
  )
}

export default Dropdown
