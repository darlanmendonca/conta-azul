import chai, {expect} from 'chai'
import WeatherCard from './weather-card.component.js'

chai.use(require('chai-html'))

window.customElements.define('ui-weather-card', WeatherCard)

describe('WeatherCard', () => {
  test('should export', () => {
    expect(WeatherCard).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new WeatherCard()

    expect(element).to.be.instanceof(WeatherCard)
  })

  test('should create element using document', () => {
    const element = document.createElement('ui-weather-card')

    expect(element).to.be.instanceof(WeatherCard)
  })

  test('should listen attribute changes', () => {
    expect(WeatherCard.observedAttributes).to.deep.equal([
      'city',
      'state',
      'temperature',
      'humidity',
      'pressure',
      'loading',
    ])
  })
})