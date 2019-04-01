import chai, {expect} from 'chai'
import Logotype from './logotype.component.js'

chai.use(require('chai-html'))

window.customElements.define('ui-logotype', Logotype)

describe('Logotype', () => {
  test('should export', () => {
    expect(Logotype).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new Logotype()

    expect(element).to.be.instanceof(Logotype)
  })

  test('should create element using document', () => {
    const element = document.createElement('ui-logotype')

    expect(element).to.be.instanceof(Logotype)
  })
})