import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import Spinner from './'

// tslint:disable: max-line-length

storiesOf('Spinner', module)
  .addDecorator(decorator)
  .add('default', () => <Spinner />)
