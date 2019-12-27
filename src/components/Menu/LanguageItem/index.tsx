import React, { useEffect, useRef, useState } from 'react'
import { isChildNode } from '../../../helpers/dom'
import { IBaseProps } from '../../../models'
import MenuItem from '../MenuItem'
import Styled from './styles'

interface IProps extends IBaseProps {
  isExpanded: boolean
  languages: string[]
  onLanguageClick?: (language: string) => void
}

const LanguageItem: React.FC<IProps> = ({ isHidden, className, style, isExpanded, languages, onLanguageClick }) => {
  if (isHidden) return null

  const [ isOpen, setIsOpen ] = useState(false)
  const ref = useRef(null)

  const handleLanguageClick = (language: string) => {
    if (onLanguageClick) onLanguageClick(language)
    setIsOpen(false)
  }

  const options = languages.map((x, i) => (
    <li onClick={ handleLanguageClick.bind(undefined, x) } className="option" key={ i }>{ x }</li>
  ))

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleDocumentClick = (event: MouseEvent) => {
    if (isOpen && !isChildNode(ref.current, event.target)) setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
  })

  return (
    <Styled className={ className || '' } style={ style } ref={ ref }>
      <MenuItem
        style={{ flex: 1 }}
        isExpanded={ isExpanded }
        label="Language"
        onClick={ handleClick } icon="language"
      />
      { isOpen && <ul className="options">{ options }</ul> }
    </Styled>
  )
}

export default LanguageItem
