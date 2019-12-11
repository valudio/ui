import { storiesOf } from '@storybook/react'
import React from 'react'
import MultiSelect from '.'
import { optionsMock } from '../../models'
import Provider from '../Provider'

storiesOf('MultiSelect', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <MultiSelect placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } />)
  .add('disabled', () => <MultiSelect placeholder="Select..." options={ [] } labelProp="value" onChange={ console.log } />)
  .add('invalid', () => <MultiSelect placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } isInvalid={ true }/>)
  .add('hidden', () => <MultiSelect placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } isHidden={ true } />)
