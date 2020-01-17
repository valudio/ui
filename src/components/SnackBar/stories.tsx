import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import Snackbar from './'

// tslint:disable: max-line-length

storiesOf('Snackbar', module)
  .addDecorator(decorator)
  .add('default', () => <Snackbar type="info" message="Info message" />)
  .add('success', () => <Snackbar type="success" message="Success message" />)
  .add('warning', () => <Snackbar type="warning" message="Warning message" />)
  .add('error', () => <Snackbar type="error" message="Error message" />)
