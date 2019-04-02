import React, {Fragment} from 'react'
import {render} from 'react-dom'
import Header from './header'
import Logotype from './logotype'
import WeatherCard from './weather-card'

const WeatherNow = () => (
  <Fragment>
    <Header>
      <Logotype />
    </Header>

    <div className='container'>
      <WeatherCard city='Urubici' state='BR' humidity pressure />
      <WeatherCard city='Nuuk' state='GL' />
      <WeatherCard city='Nairobi' state='KE' />
    </div>
  </Fragment>
)

render(<WeatherNow />, window.app)