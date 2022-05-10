import React from 'react'
import renderer from 'react-test-renderer'
import { optionsMock } from '../../models'
import Provider from '../Provider'
import Select from './'

// tslint:disable: no-console
test('Select', () => {
  const spy = jest.spyOn(console, 'error')
  spy.mockImplementation(() => undefined)

  const component = renderer.create(
    <Provider>
      <Select placeholder="Select..." options={ optionsMock } labelProp="value" onChange={ console.log } />
    </Provider>
  )
  expect(component).toBeTruthy()
  spy.mockRestore()
})
