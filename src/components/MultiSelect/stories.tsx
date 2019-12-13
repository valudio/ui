import { storiesOf } from '@storybook/react'
import React from 'react'
import MultiSelect from '.'
import { decorator } from '../../helpers/storybook'
import { optionsMock } from '../../models'

// tslint:disable: max-line-length
// tslint:disable: no-console
storiesOf('MultiSelect', module)
  .addDecorator(decorator)
  .add('default', () => <MultiSelect placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } />)
  .add('disabled', () => <MultiSelect placeholder="Select..." options={ [] } labelProp="value" onChange={ console.log } />)
  .add('invalid', () => <MultiSelect placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } isInvalid={ true }/>)
  .add('hidden', () => <MultiSelect placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } isHidden={ true } />)
