import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Checkbox from './'

test('Checkbox', () => {
  const component = renderer.create(
    <Provider>
      <Checkbox />
    </Provider>
  )
  expect(component).toBeTruthy()
})
