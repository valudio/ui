import { storiesOf } from '@storybook/react'
import React from 'react'
import MultiSelect from '.'
import Provider from '../Provider'

const options = [
  { id: '1', value: 'Option 1' },
  { id: '2', value: 'Option 2' },
  { id: '3', value: 'Option 3' },
  { id: '4', value: 'Option 4' },
  { id: '5', value: 'Option 5' }
]

storiesOf('MultiSelect', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <MultiSelect options={ options } labelProp="value" onChange={ alert } />)
