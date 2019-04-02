import React from 'react'
import {storiesOf} from '@storybook/react'
import WeatherCard from '../weather-card'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

storiesOf('WeatherNow', module)
  .addDecorator(withKnobs)
  .add('WeatherCard', () => (
    <WeatherCard 
      city={text('city', 'Nairobi')}
      state={text('state', 'KE')}
      humidity
      pressure
    />
  ))
