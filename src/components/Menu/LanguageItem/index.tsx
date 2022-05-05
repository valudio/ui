import React, { useContext, useEffect, useRef, useState } from 'react'
import { isChildNode } from '../../../helpers'
import literals from '../../../literals'
import { IBaseProps, ILanguage } from '../../../models'
import LanguageContext from '../../Provider/LanguageContext'
import MenuItem from '../MenuItem'
import Styled from './styles'

interface IProps extends IBaseProps {
  isExpanded: boolean
  languages: ILanguage[]
  languageLabel?: string
  onLanguageClick?: (language: string) => void
}

const LanguageItem: React.FC<IProps> = ({
  isHidden, className, style, isExpanded, languages, languageLabel, onLanguageClick
}) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const language = useContext(LanguageContext)
  const languageRef = useRef<HTMLDivElement>()

  const handleLanguageClick = (lang: ILanguage) => {
    if (onLanguageClick) onLanguageClick(lang.locale)
    setIsOpen(false)
  }

  const options = languages.map((x, i) => (
    <li onClick={ handleLanguageClick.bind(undefined, x) } className="option" key={ i }>{ x.label }</li>
  ))

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleDocumentClick = (event: MouseEvent) => {
    if (isOpen && !isChildNode(languageRef.current, event.target)) setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  })

  if (isHidden) return null
  return (
    <Styled className={ className || '' } style={ style } ref={ languageRef }>
      <MenuItem
        style={{ flex: 1 }}
        isExpanded={ isExpanded }
        label={ languageLabel ? languageLabel : literals[language].language }
        onClick={ handleClick } icon="language"
      />
      { isOpen && <ul className="options">{ options }</ul> }
    </Styled>
  )
}

export default LanguageItem
