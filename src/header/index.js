import Minimalist from 'minimalist-ui/dist/src/minimalist/minimalist.class.js'

class Header extends Minimalist {
  render () {
    return `
      <header>${this.innerHTML}</header>
    `
  }
}

export default Header