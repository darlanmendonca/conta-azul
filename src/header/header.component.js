import UIComponent from '../ui-component/ui-component.class.js'

class Header extends UIComponent {
  render () {
    return `
      <header>${this.innerHTML}</header>
    `
  }
}

export default Header