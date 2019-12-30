import React, { Children, cloneElement, isValidElement, ReactNode, useState } from 'react'
import { IBaseProps, ILanguage } from '../../models'
import LanguageItem from './LanguageItem'
import MenuItem from './MenuItem'
import Styled from './styles'

interface IProps extends IBaseProps {
  onLanguageClick?: (language: string) => void
  languages?: ILanguage[]
  username?: string
}

const Menu: React.FC<IProps> = ({ children, isHidden, className, style, languages, username, onLanguageClick }) => {
  if (isHidden) return null

  const [ isExpanded, setIsExpanded ] = useState(false)
  const classNames = `wrapper ${ isExpanded ? 'expanded' : '' }`
  const items = Children.map(children, x => isValidElement(x) && cloneElement(x, { className: 'item', isExpanded }))

  return (
    <Styled className={ className || '' } style={ style }>
      <div className={ classNames } >
        <button className="logo" onClick={ setIsExpanded.bind(undefined, !isExpanded) } />
        <section className="items">{ items }</section>
        <LanguageItem
          isHidden={ !languages || !languages.length }
          isExpanded={ isExpanded }
          languages={ languages || [] }
          onLanguageClick={ onLanguageClick }
        />
        <MenuItem
          isExpanded={ isExpanded }
          isHidden={ !username }
          label={ username || '' }
          className="username"
          icon={ <div className="badge" /> as ReactNode }
        />
      </div>
    </Styled>
  )
}

export default Menu
