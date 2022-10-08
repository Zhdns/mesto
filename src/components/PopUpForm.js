import PopUp from "./PopUp.js";


export default class PopUpForm extends PopUp {
    constructor(popUp, {handleSubmit}) {
        super(popUp)
        this._form = this._popUp.querySelector('.pop-up__form-input')
        this._handleSubmit = handleSubmit
        this._inputList = this._form.querySelectorAll('.pop-up__input-text')
    

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
        this._form.addEventListener('submit', (evt) => this._handleSubmit(this._getInputValues(), evt))
    }
    close() { 
        super.close()
        this._form.reset()
    }
}