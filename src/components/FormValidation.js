export default class FormValidation{
    constructor(config, form) {
        this._config = config
        this.form = form
        this.button = form.querySelector(this._config.buttonElement)
        this.inputList = this.form.querySelectorAll(this._config.inputElement)
        
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
        this.inputList.forEach((input) => {
            this._hideError(input)
        })
    }
    _toggleButtonState() {
        const valid = this.form.checkValidity()
        if(valid) {
            this.activateButton()
        }
        else {
            this.disableButton()
        }
    }
    activateButton() {
        this.button.removeAttribute('disabled')
    }
    disableButton() {
        this.button.setAttribute('disabled', true);
    }
    _hideError(input) {
        input.classList.remove(this._config.inputError)
        input.nextElementSibling.textContent = " "
        input.nextElementSibling.classList.remove(this._config.inputTextError)
    }
    enableValidation() {
        this.form.addEventListener('input', (evt) => this._setEventListeners(evt))
    }
}





