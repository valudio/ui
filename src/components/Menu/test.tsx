import React from 'react'
import renderer from 'react-test-renderer'
import { languagesMock } from '../../models'
import Provider from '../Provider'
import Menu from './'
import MenuItem from './MenuItem'

test('Menu', () => {
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
})
