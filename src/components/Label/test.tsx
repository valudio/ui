import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Label from './'

test('Label', () => {
  const component = renderer.create(
    <Provider>
      <Label type="error">Test</Label>
    </Provider>
  )
  expect(component).toBeTruthy()
})
