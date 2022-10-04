export default class PopUp {
    constructor (popUp) {
        this._popUp = popUp
        this.closeButton = this._popUp.querySelector('.pop-up__close-button')
    }
    open() {
        this._popUp.classList.add('pop-up_open');
        document.addEventListener('keydown', this._closeByEscape)
        this._popUp.addEventListener('mousedown', this._closeOnOverlay)
    }
    setEventLisners() {
        this.closeButton.addEventListener('click', () => this.close())
    }
    close() {
        this._popUp.classList.remove('pop-up_open');
        document.removeEventListener('keydown', this._closeByEscape) 
        this._popUp.removeEventListener('mousedown', this._closeOnOverlay)
        
        
    }
    _closeByEscape = (e) => {
        if (e.key === 'Escape') {
            this.close()
        }
    }
    _closeOnOverlay = (e) => {
        if (e.target === this._popUp) {
            this.close();
        }
    }
}
