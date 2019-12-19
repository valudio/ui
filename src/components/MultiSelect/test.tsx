import React from 'react'
import renderer from 'react-test-renderer'
import { optionsMock } from '../../models'
import Provider from '../Provider'
import Multiselect from './'

// tslint:disable: no-console

test('Multiselect', () => {
  const component = renderer.create(
    <Provider>
      <Multiselect placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } />
    </Provider>
  )
  expect(component).toBeTruthy()
})
