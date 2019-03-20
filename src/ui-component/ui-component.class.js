class UIComponent extends window.HTMLElement {
  connected = false

  static observedAttributes = []

  constructor(self) {
    super(self)
  }

  connectedCallback() {
    this.connected = true
    if (this.beforeRender) {
      this.beforeRender()
    }
    this.innerHTML = this.render(this.props)
    if (this.afterRender) {
      this.afterRender()
    }
  }

  attributeChangedCallback() {
    if (!this.connected) {
      return
    }

    this.updateRender()
  }

  get props() {
    const attributes = {}

    this.constructor.observedAttributes.forEach(name => {
      attributes[name] = this.getAttribute(name) || this[name] || undefined
    })

    const element = this

    const proxy = {
      get(target, name) {
        return typeof name === 'string'
          ? element.getAttribute(name) || element[name] || ''
          : undefined
      },
      set(target, name, value) {
        value
          ? element.setAttribute(name, String(value))
          : element.removeAttribute(name)
        return value
      }
    }

    return new Proxy(attributes, proxy)
  }

  updateRender() {
    const markup = document.createElement('div')
    markup.innerHTML = this.render(this.props)

    Array
      .from(this.children)
      .forEach((current, index) => {
        const newElement = markup.children[index]
        this.updateNode(current, newElement)
      })
  }

  updateNode(current, newElement) {
    const isAttributeChange = attribute => attribute.value !== current.getAttribute(attribute.name)

    const isTextChange = current.innerHTML === current.textContent
      && current.textContent !== newElement.textContent

      if (isTextChange) {
        current.textContent = newElement.textContent
      }

      Array
        .from(newElement.attributes)
        .filter(isAttributeChange)
        .forEach(attribute => {
          current.setAttribute(attribute.name, attribute.value)
        })

      Array
        .from(current.children)
        .forEach((current, index) => this.updateNode(current, newElement.children[index]))
  }
}

export default UIComponent