import React from 'react'
import {storiesOf} from '@storybook/react'
import Header from './index.js'
import Logotype from '../logotype'

storiesOf('WeatherNow', module)
  .add('Header', () => <Header><Logotype /></Header>)
