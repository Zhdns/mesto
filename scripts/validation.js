
//form profile
const formProfile = document.forms.profile;
const formProfileInput = formProfile.querySelector('.pop-up__input-text')

//form card
const formCard = document.forms.card;
const formCardInput = formCard.querySelector('.pop-up__input-text')



//validation
const showInputError = (formElement, inputElement, errorMessege) => {
    const errorElement= formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.add('pop-up__input-text_error')
    errorElement.textContent = errorMessege
    errorElement.classList.add('pop-up__input-error_active')
}

const hideInputError = (formElement, inputElement) => {
    const errorElement= formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove('pop-up__input-text_error')
    errorElement.textContent = " "
    errorElement.classList.remove('pop-up__input-error_active')
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
    const inputList = Array.from(formElement.querySelectorAll('.pop-up__input-text'));
    const buttonElement = formElement.querySelector('.pop-up__input-button'); 
    
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
});
});
}; 

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.pop-up__form-input'));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.pop-up__fieldset'));

    fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
});
    });
};

enableValidation();
