import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import StatusDot from './'

storiesOf('StatusDot', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <StatusDot type="primary" />)
  .add('error', () => <StatusDot type="error" />)
  .add('success', () => <StatusDot type="success" />)
  .add('info', () => <StatusDot type="info" />)
  .add('warning', () => <StatusDot type="warning" />)
  .add('custom', () => <StatusDot style={{ backgroundColor: '#00FF00' }} />)
