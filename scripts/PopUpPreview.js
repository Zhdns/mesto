import PopUp from "./PopUp.js"

export default class PopUpPreview {

    constructor(element, photo, text, preview) {
        this.element = element;
        this.photo = photo;
        this.text = text;
        this.preview = preview
        this.popUp = new PopUp(preview.popUp, preview.buttonClose)

    }
    openPreview(){
    this.element.addEventListener('click', () => {
        this.popUp.open()
        this.preview.photoInput.src = this.photo
        this.preview.photoInput.alt = this.text
        this.preview.nameInput.textContent = this.text
        this.popUp.handleClose()
    })
    }
}