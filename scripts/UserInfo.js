import PopUpFormUser from "./PopUpFormUser.js";

export default class UserInfo {
    constructor(user, profile, form) {
        this.user = user
        this.profile = profile
        this.form = form
        this.element = this.profile.template.querySelector('.profile__account').cloneNode(true)
        this.editButton = this.element.querySelector('.profile__info-button')
        this.button =  this.element.querySelector('.profile__add-button')
        this.avatar = this.element.querySelector('.profile__avatar')
        this.name = this.element.querySelector('.profile__info-name')
        this.profession = this.element.querySelector('.profile__info-profession')
        this.popUpForm = new PopUpFormUser(this.profile, this.name, this.profession, this.editButton, this.form)
    }
    _getUserInfo() { 
        this.avatar.src = this.user.avatar
        this.name.textContent = this.user.name
        this.profession.textContent = this.user.profession
        this.popUpForm.setEventLisners()
        
        return this.element
    }
    SetUserInfo(container) {
        container.prepend(this._getUserInfo())
    }
}

