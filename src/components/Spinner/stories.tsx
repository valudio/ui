import { storiesOf } from '@storybook/react'
import React from 'react'
import Spinner from '.'
import Provider from '../Provider'

// tslint:disable: max-line-length

storiesOf('Spinner', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <Spinner />)
