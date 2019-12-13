import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import File from './'

test('File', () => {
  const component = renderer.create(
    <Provider>
      <File type="pdf" name="test" />
    </Provider>
  )
  expect(component).toBeTruthy()
})
