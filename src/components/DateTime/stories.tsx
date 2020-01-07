import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import DateTime from './'

// tslint:disable: no-console
// tslint:disable: max-line-length

storiesOf('DateTime', module)
  .addDecorator(decorator)
  .add('default', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } />)
  .add('min date', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } minDate={ new Date().toISOString() } />)
  .add('max date', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } maxDate={ new Date().toISOString() } />)
