import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Snackbar from './'

test('Snackbar', () => {
  const component = renderer.create(
    <Provider>
      <Snackbar type="info" message="Info message" />
    </Provider>
  )
  expect(component).toBeTruthy()
})
