import { storiesOf } from '@storybook/react'
import React from 'react'
import Provider from '../Provider'
import Icon from './'

storiesOf('Icon', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <Icon />)
