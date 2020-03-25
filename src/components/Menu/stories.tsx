import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import { languagesMock } from '../../models'
import Icon from '../Icon'
import Menu from './'
import MenuItem from './MenuItem'

// tslint:disable: jsx-no-lambda
storiesOf('Menu', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => (
    <Menu
      className="menu"
      username="John Doe"
      onLanguageClick={ alert }
      languages={ languagesMock }
      logoSrc="https://valudio.com/themes/valudio/assets/images/logo.svg"
      onSignOut={ () => { return } }
    >
      <MenuItem onClick={ () => { return } } label="Dashboard" icon="dashboard" isActive/>
      <MenuItem onClick={ () => { return } } label="Calendar" icon="calendar" />
      <MenuItem onClick={ () => { return } } label="Add file" icon="add" isButton/>
    </Menu>
  ))
  .add('Long username', () => (
    <Menu
      className="menu"
      username="development@valudio.com"
      onLanguageClick={ () => { return } }
      languages={ languagesMock }
      logoSrc="https://valudio.com/themes/valudio/assets/images/logo.svg"
      onSignOut={ () => { return } }
    >
      <MenuItem onClick={ () => { return } } label="Dashboard" icon="dashboard" isActive/>
      <MenuItem onClick={ () => { return } } label="Calendar" icon="calendar" />
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
          onLanguageClick={ () => { return } }
          languages={ languagesMock }
          logoSrc="https://valudio.com/themes/valudio/assets/images/logo.svg"
          onSignOut={ alert }
          isExpanded={ isVisible }
        >
          <MenuItem onClick={ () => { return } } label="Dashboard" icon="dashboard" isActive/>
          <MenuItem onClick={ () => { return } } label="Calendar" icon="calendar" />
        </Menu>
      </>
    )
  })
