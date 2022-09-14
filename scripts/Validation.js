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
    };
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
    checkFormValidity() {
        const valid = this.form.checkValidity()
        if(valid) {
            this.button.removeAttribute('disabled')
        }
        else {
            this.button.setAttribute('disabled', true);
        }
    }
    render() {
        this.form.addEventListener('input', (evt) => this._target(evt))
    }
}





