import React from 'react'
import {storiesOf} from '@storybook/react'
import WeatherCard from '../weather-card'

storiesOf('WeatherNow', module)
  .add('WeatherCard', () => (
    <WeatherCard 
      city='Nairobi'
      state='KE'
      humidity
      pressure
    />
  ))
