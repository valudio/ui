import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import { languagesMock } from '../../models'
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
    >
      <MenuItem onClick={ alert } label="Dashboard" icon="dashboard" />
      <MenuItem onClick={ alert } label="Calendar" icon="calendar" />
    </Menu>
  ))
