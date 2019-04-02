import {expect} from 'chai'
import {shallow} from 'enzyme'

import React from 'react'
import Logotype from './index.js'

describe('Logotype', () => {
  it('should export a function', () => {
    expect(Logotype).to.be.a('function')
  })

  it('should render a h1', () => {
    const wrapper = shallow(<Logotype />)
    expect(wrapper.find('h1.ui-logotype')).to.have.lengthOf(1)
  })

  it('should render an image', () => {
    const wrapper = shallow(<Logotype />)
    expect(wrapper.find('h1 img')).to.have.lengthOf(1)
  })
})