import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { decorator } from '../../helpers/storybook'
import { languagesMock } from '../../models'
import Icon from '../Icon'
import Menu from './'
import MenuItem from './MenuItem'

storiesOf('Menu', module)
  .addDecorator(decorator)
  .add('default', () => (
    <Menu
      className="menu"
      username="John Doe"
      onLanguageClick={ alert }
      languages={ languagesMock }
      logoSrc="https://valudio.com/themes/valudio/assets/images/logo.svg"
      onSignOut={ alert }
    >
      <MenuItem onClick={ alert } label="Dashboard" icon="dashboard" />
      <MenuItem onClick={ alert } label="Calendar" icon="calendar" />
    </Menu>
  ))
  .add('Long username', () => (
    <Menu
      className="menu"
      username="development@valudio.com"
      onLanguageClick={ alert }
      languages={ languagesMock }
      logoSrc="https://valudio.com/themes/valudio/assets/images/logo.svg"
      onSignOut={ alert }
    >
      <MenuItem onClick={ alert } label="Dashboard" icon="dashboard" />
      <MenuItem onClick={ alert } label="Calendar" icon="calendar" />
    </Menu>
  ))
  .add('force expanded', () => {
    const [ isVisible, setIsVisible ] = useState(undefined)
    return (
      <>
        <Icon
          icon="menu"
          style={{ position: 'fixed', top: 20, right: 20, width: 20, height: 20 }}
          onClick={ setIsVisible.bind(undefined, !isVisible) }
        />
        <Menu
          className="menu"
          username="development@valudio.com"
          onLanguageClick={ alert }
          languages={ languagesMock }
          logoSrc="https://valudio.com/themes/valudio/assets/images/logo.svg"
          onSignOut={ alert }
          isExpanded={ isVisible }
        >
          <MenuItem onClick={ alert } label="Dashboard" icon="dashboard" />
          <MenuItem onClick={ alert } label="Calendar" icon="calendar" />
        </Menu>
      </>
    )
  })
