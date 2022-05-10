import React from 'react'
import renderer from 'react-test-renderer'
import { languagesMock } from '../../models'
import Provider from '../Provider'
import Menu from './'
import MenuItem from './MenuItem'

/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

test('Menu', () => {
  const spy = jest.spyOn(console, 'error')
  spy.mockImplementation(() => undefined)

  const component = renderer.create(
    <Provider>
      <Menu
        className="menu"
        username="John Doe"
        logoSrc=""
        onLanguageClick={ jest.fn() }
        languages={ languagesMock }
      >
        <MenuItem onClick={ jest.fn() } label="Dashboard" icon="dashboard" />
        <MenuItem onClick={ jest.fn() } label="Calendar" icon="calendar" />
      </Menu>
    </Provider>
  )
  expect(component).toBeTruthy()
  spy.mockRestore()
})
