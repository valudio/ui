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
  .add('default', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } locale="en-US" />)
  .add('english', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } locale="en-US" />)
  .add('french', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } locale="fr-FR" />)
  .add('spanish', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } locale="es-ES" />)
  .add('min date', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } minDate={ new Date().toISOString() } locale="en-US" />)
  .add('max date', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } maxDate={ new Date().toISOString() } locale="en-US" />)
  .add('empty value', () => <DateTime onChange={ console.log } placeholder="DD/MM/YYYY 00:00:00" locale="en-US" />)
