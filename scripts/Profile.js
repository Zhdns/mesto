import Utils from "./Utils.js";
import Validation from "./validation.js";
import {formObj}  from "./constants.js";

export default class Profile {
    constructor(user, constants) {
        this.user = user
        this.constants = constants
    }
    _handleOpen() {
        this.constants.nameInput.value = this.name.textContent;
        this.constants.professionInput.value = this.profession.textContent;
        new Validation(formObj, this.constants.form).checkFormValidity()
        new Utils(this.constants.form, formObj, this.constants.popUp).handleOpen()
        new Utils(this.constants.form, formObj, this.constants.popUp).cleanInputs()
    }
    _handleClose() {
        new Utils(this.constants.form, formObj, this.constants.popUp).handleClose()
    }
    _sendForm = (evt) => {
        evt.preventDefault();
        this.name.textContent = this.constants.nameInput.value;
        this.profession.textContent = this.constants.professionInput.value;
        this._handleClose()
    }
    getElement() {
        this.profile = this.constants.template.querySelector('.profile__account').cloneNode(true)
        this.editButton = this.profile.querySelector('.profile__info-button')
        this.button =  this.profile.querySelector('.profile__add-button')
        this.avatar = this.profile.querySelector('.profile__avatar')
        this.name = this.profile.querySelector('.profile__info-name')
        this.profession = this.profile.querySelector('.profile__info-profession')
        this.avatar.src = this.user.avatar
        this.name.textContent = this.user.name
        this.profession.textContent = this.user.profession
        this.edit()
        
        return this.profile
    }
    render(container) {
        container.prepend(this.getElement())
    }
    edit() {
        this.editButton.addEventListener('click', () => this._handleOpen());
    }
    action() {
        this.constants.buttonClose.addEventListener('click',  () => this._handleClose()); 
        this.constants.form.addEventListener('submit', this._sendForm);   
    }
}

