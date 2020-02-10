import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import Spinner from './'

// tslint:disable: max-line-length

storiesOf('Spinner', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <Spinner />)
