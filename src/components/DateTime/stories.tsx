import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers'
import DateTime from './'

// tslint:disable: no-console
// tslint:disable: max-line-length

storiesOf('DateTime', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <DateTime onChange={ console.log } initialValue={ new Date() } />)
  .add('min date', () => <DateTime onChange={ console.log } initialValue={ new Date() } minDate={ new Date() } />)
  .add('max date', () => <DateTime onChange={ console.log } initialValue={ new Date() } maxDate={ new Date() } />)
  .add('empty value', () => <DateTime onChange={ console.log } placeholder="DD/MM/YYYY 00:00:00" />)
  .add('only date', () => <DateTime onChange={ console.log } showTime={ false } placeholder="DD/MM/YYYY" />)
