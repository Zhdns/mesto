import PopUp from "./PopUp.js"

export default class PopUpPreview extends PopUp {

    constructor(preview) {
        super(preview.popUp)
        this.preview = preview


    }
    openPreview(link, name){
        super.open()
        this.preview.photoInput.src = link
        this.preview.photoInput.alt = name
        this.preview.nameInput.textContent = name
        super.handleClose()
}
}