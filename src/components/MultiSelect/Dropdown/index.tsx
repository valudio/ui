/* tslint:disable:jsx-no-lambda */
import React, { ChangeEvent, useContext } from 'react'
import literals from '../../../literals'
import { IBaseProps, IOption } from '../../../models'
import LanguageContext from '../../Provider/LanguageContext'
import Item from '../Item'
import Styled from './styles'

interface IProps extends IBaseProps {
  labelProp: string
  options: IOption[]
  selected: IOption[]
  query: string
  onQueryChange: (newQuery: string) => void
  onBulkSelect: (filtered?: IOption[]) => void
  onClick: (option: IOption) => void
}

const Dropdown: React.FC<IProps> = ({
  isHidden, options, labelProp, selected, onClick, query, onQueryChange, onBulkSelect
}) => {
  const language = useContext(LanguageContext)
  const bulkLabel = selected.length > 0 ? literals[language].unselectAll : literals[language].selectAll

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.currentTarget.value)
  }

  const isFiltered = (label: string): boolean => {
    return label.toLowerCase().includes(query.toLowerCase())
  }

  const optionItems = options.map((x, i) => (
    <Item
      key={ i }
      label={ x[labelProp] }
      isSelected={ !!selected.find(s => s.id === x.id) }
      onClick={ () => onClick(x) }
      isHidden={ !isFiltered(x[labelProp]) }
    />
  ))

  const handleBulkSelect = () => {
    const filtered = options.filter(x => isFiltered(x[labelProp]))
    onBulkSelect(filtered)
  }

  if (isHidden) return null
  return (
    <Styled>
      <button className="bulk-select" onClick={ handleBulkSelect }>{ bulkLabel }</button>
      <input className="input" onChange={ handleChange } placeholder={ `${ literals[language].search }...` } />
      <ul className="options">{ optionItems }</ul>
    </Styled>
  )
}

export default Dropdown
