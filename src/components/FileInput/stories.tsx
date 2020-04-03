import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import FileInput from './'

storiesOf('FileInput', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add('default', () => <FileInput onChange={ alert } placeholder="Select file" />)
  .add('default disabled', () => <FileInput onChange={ alert } placeholder="Select file" isDisabled/>)
  .add('invalid', () => <FileInput onChange={ alert } placeholder="Select file" isInvalid/>)
