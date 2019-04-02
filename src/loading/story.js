import React from 'react'
import {storiesOf} from '@storybook/react'
import Loading from '../loading'

storiesOf('WeatherNow', module)
  .add('Loading', () => <Loading />)
