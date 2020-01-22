import React, { Children, cloneElement, isValidElement, ReactNode, useState } from 'react'
import { IBaseProps, ILanguage } from '../../models'
import Icon from '../Icon'
import LanguageItem from './LanguageItem'
import MenuItem from './MenuItem'
import Styled from './styles'

interface IProps extends IBaseProps {
  logoSrc: string
  onLanguageClick?: (language: string) => void
  languages?: ILanguage[]
  username?: string
  onSignOut?: () => void
  isExpanded?: boolean
}

// tslint:disable-next-line: max-line-length
const Menu: React.FC<IProps> = ({ children, isHidden, className, style, languages, username, onLanguageClick, onSignOut, logoSrc, isExpanded: isForced }) => {
  if (isHidden) return null

  const [ isExpanded, setIsExpanded ] = useState(false)
  const isExpandedComputed = isForced ?? isExpanded
  const classNames = `wrapper ${ isExpandedComputed ? 'expanded' : '' }`
  const items = Children
    .map(children, x => isValidElement(x) && cloneElement(x, { className: 'item', isExpanded: isExpandedComputed }))
  const logo = isExpandedComputed
    ? <img src={ logoSrc } className="logo" onClick={ setIsExpanded.bind(undefined, false) } />
    : <Icon icon="menu" className="logo" onClick={ setIsExpanded.bind(undefined, true) } />

  return (
    <Styled className={ className || '' } style={ style }>
      <div className={ classNames } >
        { logo }
        <section className="items">{ items }</section>
        <LanguageItem
          isHidden={ !languages || !languages.length }
          isExpanded={ isExpandedComputed }
          languages={ languages || [] }
          onLanguageClick={ onLanguageClick }
        />
        <MenuItem
          isExpanded={ isExpandedComputed }
          isHidden={ !username }
          label={ username || '' }
          className={ `username ${ !!onSignOut ? 'sign-out' : '' }` }
          icon={ !!onSignOut ? 'sign-out' : '' }
          onClick={ onSignOut }
        />
      </div>
    </Styled>
  )
}

export default Menu
