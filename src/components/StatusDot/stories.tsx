import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import StatusDot from './'

storiesOf('StatusDot', module)
  .addDecorator(decorator)
  .add('default', () => <StatusDot type="primary" />)
