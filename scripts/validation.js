class Validation {
    constructor(config, form) {
        this.config = config
        this.button = form.querySelector(this.config.buttonElement)
        this.form = form
    }
    _target(evt) {
        const input = evt.target
        this._checkInputValidity(input) 
        this._checkFormValidity()
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
    _checkFormValidity() {
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





