import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import CheckBox from './'

// tslint:disable: no-console
storiesOf('Checkbox', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <CheckBox onChange={ console.log } />)
  .add('disabled', () => <CheckBox onChange={ console.log } isDisabled/>)
  .add('hidden', () => <CheckBox onChange={ console.log } isHidden/>)
