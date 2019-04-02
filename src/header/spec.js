import {expect} from 'chai'
import {shallow} from 'enzyme'

import React from 'react'
import Header from './index.js'

describe('Header', () => {
  it('should export a function', () => {
    expect(Header).to.be.a('function')
  })

  it('should render a header', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('header.ui-header')).to.have.lengthOf(1)
  })
})