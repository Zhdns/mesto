export default class PopUp {
    constructor (popup) {
        this.popup = popup
    }
    handleOpen() {
        this.popup.classList.add('pop-up_open');
        document.addEventListener('keydown', this._closeByEscape)
        this.popup.addEventListener('click', this._closeOnOverlay)
    }

    handleClose() {
        this.popup.classList.remove('pop-up_open');
        document.removeEventListener('keydown', this._closeByEscape) 
        this.popup.removeEventListener('click', this._closeOnOverlay)
        
        
    }
    _closeByEscape = (e) => {
        if (e.key === 'Escape') {
            this._popUp = document.querySelector('.pop-up_open');
            this.handleClose(this._popUp)
        }
    }
    _closeOnOverlay = (e) => {
        this.popUp = document.querySelector('.pop-up_open');
        if (e.target === this.popUp) {
            this.handleClose(this.popUp);
        }
    }
}
