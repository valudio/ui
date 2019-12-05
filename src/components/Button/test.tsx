import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Button from './'

test('Button', () => {
  const component = renderer.create(
    <Provider>
      <Button />
    </Provider>
  )
  expect(component).toBeTruthy()
})
