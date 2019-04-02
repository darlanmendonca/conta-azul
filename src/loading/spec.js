import {expect} from 'chai'
import {shallow} from 'enzyme'

import React from 'react'
import Loading from './index.js'

describe('Loading', () => {
  it('should export a function', () => {
    expect(Loading).to.be.a('function')
  })

  it('should render a svg', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.find('svg')).to.have.lengthOf(1)
  })
})