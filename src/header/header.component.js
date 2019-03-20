import UIComponent from '../ui-component/ui-component.class.js'
import './header.style.scss'

class Header extends UIComponent {
  render () {
    return `
      <header class="ui-header">
        ${this.innerHTML}
      </header>
    `
  }
}

export default Header