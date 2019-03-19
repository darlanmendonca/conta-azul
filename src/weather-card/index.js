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
    return `
      <div style="border: 1px solid black; display: inline-block">
        <h2>${props.city}, ${props.state}</h2>
        <h3>${props.temperature}º</h3>

        ${
          props.humidity
            ? `<h4>Humidity ${props.humidity * 100}%</h4>`
            : ''
        }

        ${
          props.pressure
            ? `<h4>Pressure ${props.pressure}hPa</h4>`
            : ''
        }

        Updated at ${this.lastUpdate}
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