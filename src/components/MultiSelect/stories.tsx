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

function fakeChangeHandler(): void {
  // tslint:disable-next-line: no-console
  console.log('changed')
}

// tslint:disable: max-line-length
storiesOf('MultiSelect', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <MultiSelect placeholder="Select..." options={ options } labelProp="value" onChange={ fakeChangeHandler } />)
  .add('disabled', () => <MultiSelect placeholder="Select..." options={ [] } labelProp="value" onChange={ fakeChangeHandler } />)
  .add('invalid', () => <MultiSelect placeholder="Select..." options={ options } labelProp="value" onChange={ fakeChangeHandler } isInvalid={ true }/>)
  .add('hidden', () => <MultiSelect placeholder="Select..." options={ options } labelProp="value" onChange={ fakeChangeHandler } isHidden={ true } />)
