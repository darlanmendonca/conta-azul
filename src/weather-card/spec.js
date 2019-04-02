import {expect} from 'chai'
import {shallow} from 'enzyme'

import React from 'react'
import WeatherCard from './index.js'

describe('WeatherCard', () => {
  it('should export a function', () => {
    expect(WeatherCard).to.be.a('function')
  })

  it('should render a div', () => {
    const wrapper = shallow(<WeatherCard />)
    expect(wrapper.find('div.ui-weather-card')).to.have.lengthOf(1)
  })

  // it('should render an image', () => {
  //   const wrapper = shallow(<WeatherCard />)
  //   expect(wrapper.find('div img')).to.have.lengthOf(1)
  // })
})