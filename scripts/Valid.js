class Validation { 
        constructor(config) {
            this.formElement = config.formElement
            this.inputElement = config.inputElement
            this.inputError = config.inputError
            this.inputTextError = config.inputTextError
            this.buttonElement = config.buttonElement
            this.inputList = Array.from(this.formElement.querySelectorAll(this.inputElement));
            this.button = this.formElement.querySelector(this.buttonElement);
            this.formList = Array.form(document.querySelectorAll(this.formElement))
            this.errorElement= this.formElement.querySelector(`#${inputElement.id}-error`)
        }
        showInputError = (errorMessege) => {
            this.formElement.querySelector(this.inputElement).classList.add(this.inputError)
            this.errorElement.textContent = errorMessege
            this.errorElement.classList.add(this.inputTextError)
        }
        hideInputError = () => {
            this.formElement.querySelector(this.inputElement).classList.remove(this.inputError)
            this.errorElement.textContent = " "
            this.errorElement.classList.remove(this.inputTextError)
        }
        toggleButtonState() {
            if (hasInvalidInput(this.inputList)) {
            this.button.setAttribute('disabled', true);
        } else {
            this.button.removeAttribute('disabled');
        }
        }
        checkInputValidity = () => {
            if (!this.formElement.querySelector(this.inputElement).validity.valid) {
            this.showInputError(this.formElement.querySelector(this.inputElement).validationMessage);
            } else {
            this.hideInputError();
            }
        };
        hasInvalidInput = () => {
            return this.inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
        }
        setEventListeners = () => {            
            toggleButtonState();
            this.inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                checkInputValidity();
                toggleButtonState();
        });
        });
        }; 
        enableValidation = () => {
            this.formList.forEach((formElement) => {
            formElement.addEventListener('submit', (e) => {
            })
            setEventListeners()
        })
        }
}

const formObj = {
    formElement: '.pop-up__form-input',
    inputElement: '.pop-up__input-text',
    inputError: 'pop-up__input-text_error',
    inputTextError: 'pop-up__input-error_active',
    buttonElement: '.pop-up__input-button'
}

const valid = new Validation(formObj);
valid.enableValidation()