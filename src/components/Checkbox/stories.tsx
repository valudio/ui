/* tslint:disable:jsx-no-lambda */
import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers'
import CheckBox from './'

// tslint:disable: no-console
storiesOf('Checkbox', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <CheckBox onChange={ () => console.log('click') } />)
  .add('initial value', () => <CheckBox value={ true } onChange={ () => console.log('click') } />)
  .add('disabled', () => <CheckBox onChange={ console.log } isDisabled/>)
