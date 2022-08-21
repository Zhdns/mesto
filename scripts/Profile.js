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
        new Utils(Profile.FormProfile, formObj, Profile.ProfilePopUp).handleOpen()
        new Utils(Profile.FormProfile, formObj, Profile.ProfilePopUp).cleanInputs()
        new Utils(Profile.FormProfile, formObj, Profile.ProfilePopUp).activateSubmit()
    }
    _handleClose() {
        new Utils(Profile.FormProfile, formObj, Profile.ProfilePopUp).handleClose()
    }
    _sendForm = (evt) => {
        evt.preventDefault();
        Profile.ProfileName.textContent = Profile.FormName.value;
        Profile.ProfilePofession.textContent = Profile.FormProfession.value;
        this._handleClose()
    }
    action() {
        Profile.ProfileEditButton.addEventListener('click', () => this._handleOpen());
        Profile.ProfileCloseButton.addEventListener('click',  () => this._handleClose()); 
        Profile.FormProfile.addEventListener('submit', this._sendForm); 
        
    }
}

