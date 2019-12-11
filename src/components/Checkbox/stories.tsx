import { storiesOf } from '@storybook/react'
import React from 'react'
import Provider from '../Provider'
import CheckBox from './'

storiesOf('Checkbox', module)
  .addDecorator(x => <Provider>{ x() }</Provider>)
  .add('default', () => <CheckBox />)
  .add('disabled', () => <CheckBox isDisabled/>)
  .add('hidden', () => <CheckBox isHidden/>)
  