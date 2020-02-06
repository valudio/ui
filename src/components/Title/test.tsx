import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Title from './'

test('Title', () => {
  const component = renderer.create(
    <Provider>
      <Title />
    </Provider>
  )
  expect(component).toBeTruthy()
})
