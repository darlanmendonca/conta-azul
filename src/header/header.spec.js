import chai, {expect} from 'chai'
import Header from './header.component.js'

chai.use(require('chai-html'))

window.customElements.define('ui-header', Header)

describe('Header', () => {
  test('should export', () => {
    expect(Header).to.be.a('function')
  })

  test('should instanciate using a constructor', () => {
    const element = new Header()

    expect(element).to.be.instanceof(Header)
  })

  test('should create element using document', () => {
    const element = document.createElement('ui-header')

    expect(element).to.be.instanceof(Header)
  })

  test('should render header with class ui-header', () => {
    const element = new Header()

    expect(element.render()).html.to.equal(`
      <header class="ui-header"></header>
    `)
  })

  test('should render html inside header', () => {
    const element = new Header()
    element.innerHTML = '<p>lorem</p>'

    expect(element.render()).html.to.equal(`
      <header class="ui-header">
        <p>lorem</p>
      </header>
    `)
  })
})