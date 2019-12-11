import { storiesOf } from '@storybook/react'
import React from 'react'
import MultiSelect from '.'
import { optionsMock } from '../../models'
import Provider from '../Provider'

storiesOf('MultiSelect', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <MultiSelect options={ optionsMock } labelProp="value" onChange={ alert } />)
