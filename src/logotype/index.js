import React, {Component} from 'react'
import './style.scss'

class Logotype extends Component {
  render () {
    return (
      <h1 
        className="ui-logotype"
        aria-label={this.children} 
        >
          <img src='images/logotype.svg' />
      </h1>
    )
  }
}

export default Logotype