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
      <div class="ui-weather-card">
        <header>${props.city}, ${props.state}</header>
        <strong class="${temperatureClassName}">${props.temperature}º</strong>
        
        <footer>
          <div class="details">
            ${
              props.humidity
                ? `<h3>Humidity <span>${props.humidity * 100}%</span></h3>`
                : ''
            }

            ${
              props.pressure
                ? `<h3>Pressure <span>${props.pressure}hPa</span></h3>`
                : ''
            }
          </div>

          <small>Updated at ${this.lastUpdate}</small>
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