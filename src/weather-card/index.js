import Minimalist from 'minimalist-ui/dist/src/minimalist/minimalist.class.js'

class WeatherCard extends Minimalist {
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
      <style>
        .weather-card {
          background: white;
          font-family: Helvetica;
          color: #737c84;
          display: inline-block;
          box-shadow: 0 0 10px rgba(55, 55, 55, .1);
          text-align: center;
          border-radius: 5px;
          border: 1px solid #ebebeb;
        }

        .weather-card header {
          line-height: 2em;
          border-bottom: 1px solid #ebebeb;
        }

        .weather-card strong {
          font-size: 5em;
          font-weight: normal;
        }

        .weather-card .cold {color: #69a3ff}
        .weather-card .normal {color: #ff9632}
        .weather-card .hot {color: #ed1946}

        .weather-card footer {
          box-shadow: 0 0 10px rgba(241, 241, 241, .5);
          border-bottom-left-radius: inherit;
          border-bottom-right-radius: inherit;
        }
      </style>
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