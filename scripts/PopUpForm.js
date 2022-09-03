import { formObj } from "./constants.js"

export default class PopUpForm {
    constructor(popUp, form, button) { 
        this.popUp = popUp
        this.form = form 
        this.button = button
    }
    cleanInputs() {
        const formElement = this.form.querySelectorAll(`.pop-up__input-error`)
        const inputsElement = this.form.querySelectorAll('.pop-up__input-text')
        formElement.forEach((element) => {
            element.textContent = ""
            element.classList.remove(this.config.inputTextError)
        })
        inputsElement.forEach((input) => {
            input.classList.remove(this.config.inputError)
        })
    }
    card() {
        this.button.addEventListener('click', () =>{
            this.form.nameInput.value = ""
            this.form.linkInput.value = ""
            new Validation(formObj, this.form.form).checkFormValidity()
            this.cleanInputs()
            this.popUp.handleOpen()
        })
        this.card.buttonClose.addEventListener('click', () =>{
            new Utils(this.card.form, formObj, this.card.popUp).handleClose()
        })
    }
}