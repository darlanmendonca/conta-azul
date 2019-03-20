import UIComponent from '../ui-component/ui-component.class.js'

class Logotype extends UIComponent {
  render () {
    return `
      <h1>${this.innerHTML}</h2>
    `
  }
}

export default Logotype