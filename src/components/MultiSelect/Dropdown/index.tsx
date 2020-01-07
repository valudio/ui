import React, { ChangeEvent, useContext, useState } from 'react'
import literals from '../../../literals'
import { IBaseProps, IOption } from '../../../models'
import LanguageContext from '../../Provider/LanguageContext'
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
  if (isHidden) return null

  const [ query, setQuery ] = useState('')
  const language = useContext(LanguageContext)
  const bulkLabel = selected.length > 0 ? literals[language].unselectAll : literals[language].selectAll

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
      <input className="input" onChange={ handleChange } placeholder={ `${ literals[language].search }...` } />
      <ul className="options">{ optionItems }</ul>
    </Styled>
  )
}

export default Dropdown
