import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers'
import Toggle from './'

storiesOf('Toggle', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <Toggle onChange={ alert } />)
  .add('disabled on', () => <Toggle onChange={ alert } initialValue={ true } isDisabled />)
  .add('disabled off', () => <Toggle onChange={ alert } isDisabled />)
