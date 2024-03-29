import PopUp from "./PopUp.js";


export default class PopUpForm extends PopUp {
    constructor(popUp, handleSubmit) {
        super(popUp)
        this._form = this._popUp.querySelector('.pop-up__form-input')
        this._handleSubmit = handleSubmit
        this._inputList = Array.from(this._form.querySelectorAll('.pop-up__input-text'))
        this._buttonSubmit = this._form.querySelector('.pop-up__input-button')
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        
        return this._formValues;
    }
    setEventLisners() {
        super.setEventLisners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues())
        })
    }
    close() { 
        super.close()
        this._form.reset()
    }
    loading(isLoading) { 
        if (isLoading) {
            this._buttonSubmit.textContent = 'Сохранение...'
        }
        else {
            this._buttonSubmit.textContent = 'Сохранить'
        }
    }
}