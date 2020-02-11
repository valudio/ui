import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import Toggle from './'

storiesOf('Toggle', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <Toggle onChange={ alert } />)
  .add('disabled', () => <Toggle onChange={ alert } isDisabled />)
  .add('hidden', () => <Toggle onChange={ alert } isHidden />)
