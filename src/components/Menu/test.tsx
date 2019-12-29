import React from 'react'
import renderer from 'react-test-renderer'
import Provider from '../Provider'
import Menu from './'
import MenuItem from './MenuItem'

test('Menu', () => {
  const component = renderer.create(
    <Provider>
      <Menu
        className="menu"
        username="John Doe"
        onLanguageClick={ alert }
        languages={ [ 'Spanish', 'English', 'German' ] }
      >
        <MenuItem onClick={ alert } label="Dashboard" icon="dashboard" />
        <MenuItem onClick={ alert } label="Calendar" icon="calendar" />
      </Menu>
    </Provider>
  )
  expect(component).toBeTruthy()
})
