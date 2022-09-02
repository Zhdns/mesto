import PopUp from "./PopUp.js"

export default class Section {
    constructor ({items, render}, container) {
        this.items = items
        this.render = render
        this.container = container
    }
    setR(element) {
        this.container.prepend(element)
    }
    renderItems() {
        this.items.forEach((item) => {
            this.render(item)
        })
    }
    renderNew(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.render()      
        })
}
    setN(elem) {
        this.container.prepend(elem)
        
    }
}
