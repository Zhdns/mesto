import PopUp from "./PopUp.js"
import Validation from "./Validation.js"

export default class PopUpFormCard {
    constructor(obj, form) { 
        this.obj = obj 
        this.form = form
        this.popUp = new PopUp(obj.popUp, obj.buttonClose)
        this.validation = new Validation(this.form, this.obj.form)

    }
    setEventLisners() {
        this.obj.buttonAdd.addEventListener('click', () =>{
            this.popUp.open()
            this.obj.nameInput.value = ""
            this.obj.linkInput.value = ""
            this.validation.checkFormValidity()
            this.validation.cleanInputs()
            this.popUp.handleClose()
        }) 
    }
}