export default class Section {
    constructor ({items, render}, container) {
        this.items = items
        this.render = render
        this.container = container
    }
    addItems(element) {
        this.container.prepend(element)
    }
    renderItems() {
        this.items.forEach((item) => {
            this.render(item)
        })
    }
}
