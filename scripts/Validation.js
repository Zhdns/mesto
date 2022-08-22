export default class Validation {
    constructor(config, form) {
        this.config = config
        this.button = form.querySelector(this.config.buttonElement)
        this.form = form
        
        
    }
    _target(evt) {
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
            input.classList.remove(this.config.inputError)
            input .nextElementSibling.textContent = " "
            input.nextElementSibling.classList.remove(this.config.inputTextError)
        }
    }
    cleanInputs() {
        const inputs = this.form.querySelectorAll(this.config.inputElement)
        const errors = this.form.querySelectorAll(this.config.inputError)


        errors.forEach((error) => {
            error.textContent = ""
            error.classList.remove('.pop-up__input-error_active')
        })
        inputs.forEach((input) => {
            input.classList.remove(this.config.inputTextError)
        })    
    }
    checkFormValidity() {
        const valid = this.form.checkValidity()
        if(valid) {
            this.button.removeAttribute('disabled')
        }
        else {
            this.button.setAttribute('disabled', true);
        }
    }
    enableValidation() {
        this.form.addEventListener('input', (evt) => this._target(evt))
    }
}

