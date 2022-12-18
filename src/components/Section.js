export default class Section {
    constructor ({render}, container) {
        this.render = render
        this.container = container
    }
    addItems(element) {
        this.container.prepend(element)
    }
    renderItems(items) {
        items.forEach((item) => {
            this.render(item)
        })
    }
}
