import { storiesOf } from '@storybook/react'
import React, { useState, useEffect } from 'react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { decorator } from '../../helpers/storybook'
import { optionsMock, IOption } from '../../models'
import Modal from '../Modal'
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
  .add('with initial value', () => <Select placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } initialValue={ optionsMock[2] } />)
  .add('inside a Modal', () => (
    <Modal style={{ width: '430px', height: '100px' }}>
      <Select placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } />
    </Modal>
  ))
  .add('changing initial value after 3 seconds', () => {
    const [init, setInit] = useState<IOption>(optionsMock[1])

    useEffect(() => {
      setTimeout(() => {
        setInit(optionsMock[2])
      }, 3000);
    }, [])

    return <Select placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } initialValue={ init } />
  })
