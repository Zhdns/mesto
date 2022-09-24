import PopUp from "./PopUp.js";


export default class PopUpForm extends PopUp {
    constructor(popUpID, {handleSubmit}) {
        super(popUpID)
        this._form = this.popUp.querySelector('.pop-up__form-input')
        this.handleSubmit = handleSubmit
    

    }
    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.pop-up__input-text')
        this._formValues = {};
    this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
    });
    return this._formValues;
    }
    setEventLisners() {
        super.handleClose()
        this._form.addEventListener('submit', (evt) => this.handleSubmit(this._getInputValues(), evt))
    }
    close() { 
        super.close()
        this._form.reset()
    }
}