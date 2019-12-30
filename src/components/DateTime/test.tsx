import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import DateTime from './'

test('DateTime', () => {
  const component = renderer.create(
    <Provider>
      <DateTime onChange={ alert } initialValue={ new Date().toISOString() } />
    </Provider>
  )
  expect(component).toBeTruthy()
})
