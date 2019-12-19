import React, { ChangeEvent, useState } from 'react'
import { IBaseProps, IOption } from '../../../models'
import Item from '../Item'
import Styled from './styles'

interface IProps extends IBaseProps {
  labelProp: string
  options: IOption[]
  selected: IOption[]
  onBulkSelect: (filtered?: IOption[]) => void
  onClick: (option: IOption) => void
}

const Dropdown: React.FC<IProps> = ({ isHidden, options, labelProp, selected, onClick, onBulkSelect }) => {
  const [ query, setQuery ] = useState('')
  const bulkLabel = selected.length > 0 ? 'Unselect all' : 'Select all'
  if (isHidden) return null

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value)
  }

  const isFiltered = (label: string): boolean => {
    return label.toLowerCase().includes(query.toLowerCase())
  }

  const optionItems = options.map((x, i) => (
    <Item
      key={ i }
      label={ x[labelProp] }
      isSelected={ !!selected.find(s => s.id === x.id) }
      onClick={ onClick.bind(undefined, x) }
      isHidden={ !isFiltered(x[labelProp]) }
    />
  ))

  const handleBulkSelect = () => {
    const filtered = options.filter(x => isFiltered(x[labelProp]))
    onBulkSelect(filtered)
  }

  return (
    <Styled>
      <button className="bulk-select" onClick={ handleBulkSelect }>{ bulkLabel }</button>
      <input className="input" onChange={ handleChange } placeholder="Search..." />
      <ul className="options">{ optionItems }</ul>
    </Styled>
  )
}

export default Dropdown
