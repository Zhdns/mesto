export default class FormValidation{
    constructor(config, form) {
        this._config = config
        this._form = form
        this._button = form.querySelector(this._config.buttonElement)
        this._inputList = this._form.querySelectorAll(this._config.inputElement)
        
    }
    _setEventListeners(evt) {
        const input = evt.target
        this._checkInputValidity(input) 
        this._toggleButtonState()
    }
    
    _checkInputValidity(input)  {
        if (!input.validity.valid) {
            input.classList.add(this._config.inputError)
            input.nextElementSibling.textContent = input.validationMessage
            input.nextElementSibling.classList.add(this._config.inputTextError)
        } else {
            this._hideError(input)
        }
    };
    cleanInputs() {
        this._inputList.forEach((input) => {
            this._hideError(input)
        })
    }
    _toggleButtonState() {
        const valid = this._form.checkValidity()
        if(valid) {
            this.activateButton()
        }
        else {
            this.disableButton()
        }
    }
    activateButton() {
        this._button.removeAttribute('disabled')
    }
    disableButton() {
        this._button.setAttribute('disabled', true);
    }
    _hideError(input) {
        input.classList.remove(this._config.inputError)
        input.nextElementSibling.textContent = " "
        input.nextElementSibling.classList.remove(this._config.inputTextError)
    }
    enableValidation() {
        this._form.addEventListener('input', (evt) => this._setEventListeners(evt))
    }
}





