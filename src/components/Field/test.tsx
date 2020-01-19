import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Field from './'

test('Field', () => {
  const component = renderer.create(
    <Provider>
      <Field label="test" />
    </Provider>
  )
  expect(component).toBeTruthy()
})
