import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import File from './'

storiesOf('File', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <File name="FRSO_ADV16_12345333123412" type="txt" onClick={ alert } />)
  .add('type excel', () => <File name="FRSO_ADV16_12345333123412" type="excel" />)
  .add('type pdf', () => <File name="FRSO_ADV16_12345333123412" type="pdf" />)
  .add('disabled', () => <File name="FRSO_ADV16_12345333123412" type="pdf" isDisabled onClick={ alert } />)
