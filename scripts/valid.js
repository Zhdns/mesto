const formObj = {
    form: '.pop-up__form-input',
    formInput: '.pop-up__input-text',
    inputError: 'pop-up__input-text_error',
    inputTextError: 'pop-up__input-error_active',
    buttonElement: '.pop-up__input-button'
}



//validation
const showInputError = (formElement, inputElement, errorMessege, config) => {
    const errorElement= formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.add(config.inputError)
    errorElement.textContent = errorMessege
    errorElement.classList.add(config.inputTextError)
}

const hideInputError = (formElement, inputElement, config) => {
    const errorElement= formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove(config.inputError)
    errorElement.textContent = " "
    errorElement.classList.remove(config.inputTextError)
}


function toggleButtonState(inputList, buttonElement ) {
    if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
} else {
    buttonElement.removeAttribute('disabled');
}
}

const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
    hideInputError(formElement, inputElement, config);
    }
};

const  hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
})
}


const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.formInput));
    const buttonElement = formElement.querySelector(config.buttonElement); 
    
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement);
});
});
}; 

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.form));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (e) => {
    })
    setEventListeners(formElement, config)
})
}


enableValidation(formObj);

