const formObj = {
    form: '.pop-up__form-input',
    formInput: '.pop-up__input-text',
    inputError: 'pop-up__input-text_error',
    inputTextError: 'pop-up__input-error_active',
    buttonElement: '.pop-up__input-button'
}



//validation
const showInputError = (formElement, inputElement, errorMessege) => {
    const errorElement= formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.add(formObj.inputError)
    errorElement.textContent = errorMessege
    errorElement.classList.add(formObj.inputTextError)
}

const hideInputError = (formElement, inputElement) => {
    const errorElement= formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove(formObj.inputError)
    errorElement.textContent = " "
    errorElement.classList.remove(formObj.inputTextError)
}


function toggleButtonState(inputList, buttonElement ) {
    if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
} else {
    buttonElement.removeAttribute('disabled');
}
}

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
    hideInputError(formElement, inputElement);
    }
};

const  hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
})
}


const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(formObj.formInput));
    const buttonElement = formElement.querySelector(formObj.buttonElement); 
    
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
});
});
}; 

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(formObj.form));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (e) => {
    })
    setEventListeners(formElement)
})
}


enableValidation();

