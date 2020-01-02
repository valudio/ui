import { storiesOf } from '@storybook/react'
import React from 'react'
import { decorator } from '../../helpers/storybook'
import File from './'

storiesOf('File', module)
  .addDecorator(decorator)
  .add('default', () => <File name="FRSO_ADV16_12345333123412" type="txt" onClick={ alert } />)
  .add('type excel', () => <File name="FRSO_ADV16_12345333123412" type="csv" />)
  .add('type pdf', () => <File name="FRSO_ADV16_12345333123412" type="pdf" />)
  .add('disabled', () => <File name="FRSO_ADV16_12345333123412" type="pdf" isDisabled onClick={ alert } />)
  .add('hidden', () => <File name="FRSO_ADV16_12345333123412" type="pdf" isHidden />)
  .add('type image', () => <File name="FRSO_ADV16_12345333123412" type="png" />)
  .add('type sap', () => <File name="FRSO_ADV16_12345333123412" type="idoc" />)
