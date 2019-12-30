import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import DateTime from './'

// tslint:disable: no-console

storiesOf('DateTime', module)
  .addDecorator(decorator)
  .add('default', () => <DateTime onChange={ console.log } initialValue={ new Date().toISOString() } />)
