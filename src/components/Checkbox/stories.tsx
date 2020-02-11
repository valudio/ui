import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import CheckBox from './'

storiesOf('Checkbox', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <CheckBox />)
  .add('disabled', () => <CheckBox isDisabled/>)
  .add('hidden', () => <CheckBox isHidden/>)
