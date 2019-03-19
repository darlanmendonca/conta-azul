import Minimalist from 'minimalist-ui/dist/src/minimalist/minimalist.class.js'

class Logotype extends Minimalist {
  render () {
    return `
      <h1>${this.innerHTML}</h2>
    `
  }
}

export default Logotype