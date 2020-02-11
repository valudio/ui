import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import DateTime from './'

// tslint:disable: no-console
// tslint:disable: max-line-length

storiesOf('DateTime', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } />)
  .add('min date', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } minDate={ new Date().toISOString() } />)
  .add('max date', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } maxDate={ new Date().toISOString() } />)
  .add('empty value', () => <DateTime onChange={ console.log } placeholder="DD/MM/YYYY 00:00:00" />)
