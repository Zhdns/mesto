export default class PopUp {
    constructor (popUpID) {
        this.popUp = popUpID
        this.closeButton = this.popUp.querySelector('.pop-up__close-button')
    }
    open() {
        this.popUp.classList.add('pop-up_open');
        document.addEventListener('keydown', this._closeByEscape)
        this.popUp.addEventListener('click', this._closeOnOverlay)
    }
    handleClose() {
        this.closeButton.addEventListener('click', () => this.close())
    }
    close() {
        this.popUp.classList.remove('pop-up_open');
        document.removeEventListener('keydown', this._closeByEscape) 
        this.popUp.removeEventListener('click', this._closeOnOverlay)
        
        
    }
    _closeByEscape = (e) => {
        if (e.key === 'Escape') {
            this.popUp = document.querySelector('.pop-up_open');
            this.close()
        }
    }
    _closeOnOverlay = (e) => {
        this.popUp = document.querySelector('.pop-up_open');
        if (e.target === this.popUp) {
            this.close();
        }
    }
}
