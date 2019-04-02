import React, {Component} from 'react'
import './style.scss'
import SVGInline from 'react-svg-inline'
import image from './image.svg'

class Logotype extends Component {
  render () {
    // console.log(image)
    return (
      <h1 
        className="ui-logotype"
        aria-label={this.children} 
        >
        {
          image.startsWith('static')
            ? <img src={image} />
            : <SVGInline svg={image} />
        }
      </h1>
    )
  }
}

export default Logotype