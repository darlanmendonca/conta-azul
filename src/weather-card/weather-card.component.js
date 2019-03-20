import UIComponent from '../ui-component/ui-component.class.js'
import './weather-card.style.scss'

class WeatherCard extends UIComponent {
  static get observedAttributes() {
    return [
      'city',
      'state',
      'temperature',
      'humidity',
      'pressure',
    ]
  }

  render(props = {}) {
    const temperatureClassName = props.temperature <= 5
      ? 'cold'
      : props.temperature <= 25
        ? 'normal'
        : 'hot'

    return `
      <div class="weather-card">
        <header>${props.city}, ${props.state}</header>
        <strong class="${temperatureClassName}">${props.temperature}º</strong>
        
        <footer>
          ${
            props.humidity
              ? `<span>Humidity ${props.humidity * 100}%</span>`
              : ''
          }

          ${
            props.pressure
              ? `<span>Pressure ${props.pressure}hPa</span>`
              : ''
          }

          <div>Updated at ${this.lastUpdate}</div>
        </footer>
      </div>
    `
  }

  get lastUpdate() {
    const lastUpdated = new Date()
    const hours = lastUpdated.getHours()
    const minutes = lastUpdated.getMinutes() < 10
      ? '0' + lastUpdated.getMinutes()
      : lastUpdated.getMinutes()
    const time = hours >= 12
      ? 'PM'
      : 'AM'
      
    return `${hours}:${minutes} ${time}`
  }

  loader() {
    const apiID = 'e33be4a41e6eb8e15a1b7b87edb7e12f'
    const api = 'https://samples.openweathermap.org/data/2.5/weather'
    const city = this.getAttribute('city')
    const state = this.getAttribute('state')
    const url = api.concat(`?q=${city},${state}&appid=${apiID}`)
    fetch(url).then(() => {
      console.log('done')
    })
  }
}

export default WeatherCard