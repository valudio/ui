import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import StatusDot from './'

test('StatusDot', () => {
  const component = renderer.create(
    <Provider>
      <StatusDot type="error" />
    </Provider>
  )
  expect(component).toBeTruthy()
})
