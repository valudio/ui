import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import CheckBox from './'

storiesOf('Checkbox', module)
  .addDecorator(decorator)
  .add('default', () => <CheckBox />)
  .add('disabled', () => <CheckBox isDisabled/>)
  .add('hidden', () => <CheckBox isHidden/>)
