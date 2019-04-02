import {configure} from '@storybook/react'

const req = require.context('../src', true, /story.js$/)

configure(loadStories, module)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}
