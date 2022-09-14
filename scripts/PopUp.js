export default class PopUp {
    constructor (popup, closeButton) {
        this.popup = popup
        this.closeButton = closeButton
    }
    open() {
        this.popup.classList.add('pop-up_open');
        document.addEventListener('keydown', this._closeByEscape)
        this.popup.addEventListener('click', this._closeOnOverlay)
    }
    handleClose() {
        this.closeButton.addEventListener('click', () => this.close())
    }
    close() {
        this.popup.classList.remove('pop-up_open');
        document.removeEventListener('keydown', this._closeByEscape) 
        this.popup.removeEventListener('click', this._closeOnOverlay)
        
        
    }
    _closeByEscape = (e) => {
        if (e.key === 'Escape') {
            this._popUp = document.querySelector('.pop-up_open');
            this.close(this._popUp)
        }
    }
    _closeOnOverlay = (e) => {
        this.popUp = document.querySelector('.pop-up_open');
        if (e.target === this.popUp) {
            this.close(this.popUp);
        }
    }
}
