import React, {Component} from 'react'
import './style.scss'

class Header extends Component {
  render () {
    return (
      <header className='ui-header'>
        {this.props.children}
      </header>
    )
  }
}

export default Header