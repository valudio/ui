import React, { Children, cloneElement, isValidElement, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { isChildNode } from '../../helpers'
import { IBaseProps, ILanguage } from '../../models'
import Icon from '../Icon'
import LanguageItem from './LanguageItem'
import MenuItem from './MenuItem'
import Styled from './styles'

interface IProps extends IBaseProps {
  logoSrc: string
  onLogoClick?: () => void
  onLanguageClick?: (language: string) => void
  languageLabel?: string
  languages?: ILanguage[]
  username?: string
  onSignOut?: () => void
  isExpanded?: boolean
}

const Menu: React.FC<PropsWithChildren<IProps>> = ({
  children,
  isHidden,
  className,
  style,
  languageLabel,
  languages,
  username,
  onLanguageClick,
  onLogoClick,
  onSignOut,
  logoSrc,
  isExpanded: isForced
}) => {
  const [ isExpanded, setIsExpanded ] = useState(false)
  const isExpandedComputed = isForced ?? isExpanded
  const classNames = `wrapper ${ isExpandedComputed ? 'expanded' : '' }`
  const menuRef = useRef<HTMLDivElement>()

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isExpanded &&
      !isChildNode(menuRef.current, event.target) &&
      menuRef.current !== event.target
    ) setIsExpanded(false)
  }

  const handleLogoClick = () => {
    setIsExpanded(!isExpandedComputed)
    if (onLogoClick && typeof onLogoClick === 'function') onLogoClick()
  }

  const handleDropDownClick = () => {
    if (!isExpanded) setIsExpanded(true)
  }

  const items = Children
    .map(children, x => isValidElement(x) && cloneElement(x, { className: 'item', isExpanded: isExpandedComputed }))
  const logo = isExpandedComputed
    ? (
      <img
        src={ logoSrc }
        alt="logo"
        loading="lazy"
        onClick={ handleLogoClick }
      />
    ) : <Icon icon="menu" onClick={ handleLogoClick } />

  useEffect(() => {
    const dropDownButtons = document.getElementsByClassName('dropdown')

    document.addEventListener('click', handleClickOutside)
    if (dropDownButtons && dropDownButtons.length) {
      Array.from(dropDownButtons).map(dropdown => dropdown.addEventListener('click', handleDropDownClick))
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      if (dropDownButtons && dropDownButtons.length) {
        Array.from(dropDownButtons).map(dropdown => dropdown.removeEventListener('click', handleDropDownClick))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isHidden) return null
  return (
    <Styled className={ className || '' } style={ style } >
      <div className={ classNames } ref={ menuRef } >
        <section className="header" >
          <section className="logo">
            { logo }
          </section>
        </section>
        <section className="items">{ items }</section>
        <LanguageItem
          isHidden={ !languages || !languages.length }
          isExpanded={ isExpandedComputed }
          languageLabel={ languageLabel }
          languages={ languages || [] }
          onLanguageClick={ onLanguageClick }
        />
        <MenuItem
          isExpanded={ isExpandedComputed }
          isHidden={ !username }
          label={ username || '' }
          className={ `username ${ onSignOut ? 'sign-out' : '' }` }
          icon={ onSignOut ? 'sign-out' : '' }
          onClick={ onSignOut }
        />
      </div>
    </Styled>
  )
}

export default Menu
