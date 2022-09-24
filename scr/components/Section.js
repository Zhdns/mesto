export default class Section {
    constructor ({items, render}, container) {
        this.items = items
        this.render = render
        this.container = container
    }
    setItems(element) {
        this.container.prepend(element)
    }
    renderItems() {
        this.items.forEach((item) => {
            this.render(item)
        })
    }
    renderNewCard(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.render()      
        })
}
}
