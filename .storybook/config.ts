import { configure, setAddon  } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import './styles.css'

setAddon(JSXAddon)
const req = require.context('../src', true, /stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
