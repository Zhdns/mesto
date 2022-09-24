export default class FormValidationValidation {
    constructor(config, form) {
        this.config = config
        this.form = form
        this.button = form.querySelector(this.config.buttonElement)
        this.inputList = this.form.querySelectorAll(this.config.inputElement)
        
    }
    _setEventListeners(evt) {
        const input = evt.target
        this._checkInputValidity(input) 
        this.checkFormValidity()
    }
    
    _checkInputValidity(input)  {
        if (!input.validity.valid) {
            input.classList.add(this.config.inputError)
            input.nextElementSibling.textContent = input.validationMessage
            input.nextElementSibling.classList.add(this.config.inputTextError)
        } else {
            this._hideError(input)
        }
    };
    cleanInputs() {
        this.inputList.forEach((input) => {
            this._hideError(input)
        })
    }
    checkFormValidity() {
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
        input.classList.remove(this.config.inputError)
        input.nextElementSibling.textContent = " "
        input.nextElementSibling.classList.remove(this.config.inputTextError)
    }
    enableValidation() {
        this.form.addEventListener('input', (evt) => this._setEventListeners(evt))
    }
}





