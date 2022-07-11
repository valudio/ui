import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import CheckBox from './'

// tslint:disable: no-console
storiesOf('Checkbox', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  // tslint:disable-next-line:jsx-no-lambda
  .add('default', () => <CheckBox onChange={ () => console.log('click') } />)
  .add('disabled', () => <CheckBox onChange={ console.log } isDisabled/>)
