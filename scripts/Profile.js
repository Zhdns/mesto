
class Profile {

    static ProfileEditButton = document.querySelector('.profile__info-button');
    static ProfileCloseButton = document.querySelector('#close-name-form');
    static ProfileName = document.querySelector('.profile__info-name');
    static ProfilePofession = document.querySelector('.profile__info-profession');
    static FormName = document.querySelector('#pop-up__name-input');
    static FormProfession = document.querySelector('#pop-up__profession-input');
    static FormProfile = document.forms.profile;
    static ProfilePopUp = document.querySelector('#pop-up-profile-form');

    constructor() {
    }
    _handleOpen() {
        Profile.FormName.value = Profile.ProfileName.textContent;
        Profile.FormProfession.value = Profile.ProfilePofession.textContent;
        Profile.ProfilePopUp.classList.add('pop-up_open');
    }
    _handleClose() {
        Profile.ProfilePopUp.classList.remove('pop-up_open');
    }
    _sendForm = (evt) => {
        evt.preventDefault();
        Profile.ProfileName.textContent = Profile.FormName.value;
        Profile.ProfilePofession.textContent = Profile.FormProfession.value;
        this._handleClose()
    }
    _render() {
        Profile.ProfileEditButton.addEventListener('click', () => this._handleOpen());
        Profile.ProfileCloseButton.addEventListener('click',  () => this._handleClose()); 
        Profile.FormProfile.addEventListener('submit', this._sendForm); 
    }
}

const profile = new Profile();
profile._render()