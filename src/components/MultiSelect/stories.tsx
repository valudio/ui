import { storiesOf } from '@storybook/react'
import React from 'react'
import React, { useState, MutableRefObject } from 'react'
import { decorator } from '../../helpers/storybook'
import { optionsMock } from '../../models'
import MultiSelect from './'

// tslint:disable: max-line-length
// tslint:disable: no-console
storiesOf('MultiSelect', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <MultiSelect placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } />)
  .add('empty options', () => <MultiSelect placeholder="Select..." options={ [] } labelProp="value" onChange={ console.log } />)
  .add('disabled', () => <MultiSelect placeholder="Select..." options={ [] } labelProp="value" onChange={ console.log } isDisabled />)
  .add('invalid', () => <MultiSelect placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } isInvalid />)
  .add('hidden', () => <MultiSelect placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } isHidden />)
