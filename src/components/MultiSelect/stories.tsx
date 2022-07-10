import { storiesOf } from '@storybook/react'
import React from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers'
import { optionsMock } from '../../models'
import MultiSelect from './'

storiesOf('MultiSelect', module)
  .addDecorator(jsxDecorator)
  .addDecorator(decorator)
  .add(
		'default',
		() => <MultiSelect value={ [] } placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } />
  )
  .add(
		'empty options',
		() => <MultiSelect value={ [] } placeholder="Select..." options={ [] } labelProp="value" onChange={ console.log } />
  )
  .add(
		'disabled',
		() => (
			<MultiSelect
				value={ [] }
				placeholder="Select..."
				options={ [] }
				labelProp="value"
				onChange={ console.log }
				isDisabled
			/>
		)
  )
  .add(
		'invalid',
		() => (
			<MultiSelect
				value={ [] }
				placeholder="Select..."
				options={ optionsMock }
				labelProp="value"
				onChange={ console.log }
				isInvalid
			/>
		)
  )
