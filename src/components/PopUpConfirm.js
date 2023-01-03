import PopUp from "./PopUp.js";

export default class PopUpConfirm extends PopUp {
    constructor(popUp) {
        super(popUp)
        this._buttonSubmit = this._popUp.querySelector('.pop-up__input-button')
    }
    setCallback(func) {
        this._handleSubmit = func
    }
    setEventLisners() {
        super.setEventLisners()
        this._buttonSubmit.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleSubmit()
        })
    }
}