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
      'loading',
    ]
  }

  beforeRender() {
    this.loader()
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
        <!-- <strong>
          <svg width='50px' height='50px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring-alt">
            <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
            <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0)" fill="none" stroke-width="10" stroke-linecap="round"></circle>
            <circle cx="50" cy="50" r="40" stroke="#737c84" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="stroke-dashoffset" dur="1.5s" repeatCount="indefinite" from="0" to="502"></animate>
              <animate attributeName="stroke-dasharray" dur="1.5s" repeatCount="indefinite" values="188.25 62.75;1 250;188.25 62.75"></animate>
            </circle>
          </svg>
        </strong> -->
        
        <footer>
          <div class="details">
            ${
              props.humidity
                ? `<h3>Humidity <span>${props.humidity}%</span></h3>`
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
    this.props.loading = true
    const apiID = 'e33be4a41e6eb8e15a1b7b87edb7e12f'
    const api = 'http://api.openweathermap.org/data/2.5/weather'
    const city = this.getAttribute('city')
    const state = this.getAttribute('state')
    const url = api.concat(`?q=${city},${state}&units=metric&appid=${apiID}`)

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // this.props.loading = false
        this.props.temperature = parseInt(data.main.temp)
        
        if (this.hasAttribute('humidity')) {
          this.props.humidity = parseInt(data.main.humidity)
        }

        if (this.hasAttribute('pressure')) {
          this.props.pressure = parseInt(data.main.pressure)
        }
      })
  }
}

export default WeatherCard