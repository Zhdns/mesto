import PopUp from "./PopUp.js";
import Validation from "./Validation.js";

export default class PopUpFormUser {
    constructor(profile, name, profession, buttonEdit, form) {
        this.profile = profile
        this.name = name
        this.form = form
        this.profession = profession
        this.buttonEdit = buttonEdit
        this.popUp = new PopUp(profile.popUp, profile.buttonClose)
        this.validation = new Validation(this.form, this.profile.form)
    }
    _getInputValues() {
        this.profile.nameInput.value = this.name.textContent;
        this.profile.professionInput.value = this.profession.textContent;
    }
    _sendForm = (evt) => {
        evt.preventDefault(); 
        this.name.textContent = this.profile.nameInput.value;
        this.profession.textContent = this.profile.professionInput.value;
        this.popUp.close()
    }
    setEventLisners() {
        this.buttonEdit.addEventListener('click', ()=> {
            this.popUp.open()
            this._getInputValues()
            this.validation.checkFormValidity()
            this.validation.cleanInputs()
            this.popUp.handleClose()
            this.profile.form.addEventListener('submit', this._sendForm); 
        })
    }
}