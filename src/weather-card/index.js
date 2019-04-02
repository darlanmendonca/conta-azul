import React, {Component} from 'react'
import './style.scss'
import Loading from '../loading'
import dayjs from 'dayjs'

class WeatherCard extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
    }
  }

  componentWillMount() {
    this.loading()
  }

  render() {
    const {
      city,
      state,
      humidity: showHumidity,
      pressure: showPressure,
    } = this.props

    const {
      isLoading,
      temperature, 
      humidity, 
      pressure,
    } = this.state

    const temperatureClassName = temperature <= 5
      ? 'cold'
      : temperature <= 25
        ? 'normal'
        : 'hot'

    return (
      <div className='ui-weather-card'>
        <header>{city}, {state}</header>
        {
          isLoading &&
          <strong>
            <Loading />
          </strong>
        }

        {
          !isLoading &&
          <strong className={temperatureClassName}>
            {temperature}º
          </strong>
        }

        <footer>
          <div className='details'>
            {
              temperature && showHumidity && 
              <h3>Humidity <span>{humidity}%</span></h3>
            }
            {
              temperature && showPressure && 
              <h3>Pressure <span>{pressure}hPa</span></h3>
            }
          </div>

          <small>
            {
              isLoading 
                ? '—'
                : `Updated at ${dayjs().format('HH:mm A')}`
            }
          </small>
        </footer>
      </div>
    )
  }

  loading() {
    const apiID = 'e33be4a41e6eb8e15a1b7b87edb7e12f'
    const api = 'http://api.openweathermap.org/data/2.5/weather'
    const {city, state} = this.props
    const url = api.concat(`?q=${city},${state}&units=metric&appid=${apiID}`)

    fetch(url)
      .then(response => response.json())
      .then(data => new Promise(resolve => setTimeout(() => resolve(data), 400)))
      .then(data => {
        const newState = {
          isLoading: false, 
          temperature: parseInt(data.main.temp),
        }
        
        if (this.props.humidity) {
          newState.humidity = parseInt(data.main.humidity)
        }

        if (this.props.pressure) {
          newState.pressure = parseInt(data.main.pressure)
        }

        this.setState(newState)
      })
  }
}

export default WeatherCard