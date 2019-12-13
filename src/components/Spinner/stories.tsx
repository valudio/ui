import { storiesOf } from '@storybook/react'
import React from 'react'
import Spinner from '.'
import { decorator } from '../../helpers/storybook'

// tslint:disable: max-line-length

storiesOf('Spinner', module)
  .addDecorator(decorator)
  .add('default', () => <Spinner />)
