import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import { optionsMock } from '../../models'
import Select from './'

// tslint:disable: max-line-length
// tslint:disable: no-console
storiesOf('Select', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <Select placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } />)
  .add('empty options', () => <Select placeholder="Select..." options={ [] } labelProp="value" onChange={ console.log } />)
  .add('disabled', () => <Select placeholder="Select..." options={ [] } labelProp="value" onChange={ console.log } isDisabled />)
  .add('invalid', () => <Select placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } isInvalid />)
  .add('hidden', () => <Select placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } isHidden />)
  .add('with initial value', () => <Select placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } initialValue={ optionsMock[2] } />)
