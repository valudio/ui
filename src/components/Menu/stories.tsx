import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import Menu from './'
import MenuItem from './MenuItem'

storiesOf('Menu', module)
  .addDecorator(decorator)
  .add('default', () => (
    <Menu
      className="menu"
      username="John Doe"
      onLanguageClick={ alert }
      languages={ [ 'Spanish', 'English', 'German' ] }
    >
      <MenuItem onClick={ alert } label="Dashboard" icon="dashboard" />
      <MenuItem onClick={ alert } label="Calendar" icon="calendar" />
    </Menu>
  ))
