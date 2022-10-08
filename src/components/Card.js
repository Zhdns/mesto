export default class Card {
    constructor(card, data, preview) { 
        this._card = card 
        this._element = this._card.template.querySelector('.elements__card').cloneNode(true);
        this._photo = this._element.querySelector('.elements__photo');
        this._text = this._element.querySelector('.elements__information-name')
        this.link = data.link
        this.name = data.name
        this._preview = preview
        this._buttonLike = this._element.querySelector('.elements__information-button');
        this._buttonDelete = this._element.querySelector('.elements__delete-button');

    }
    _openPreviewAddListener() {
        this._photo.addEventListener('click', () => {
            this._preview(this.link, this.name)
        })
    }
    _likeAddListener() {
        this._buttonLike.addEventListener('click', (e) => {this.like(e)})
    }
    like(e) {
        e.target.classList.toggle('elements__information-button_active')
    }
    _deleteAddListener() {
        this._buttonDelete.addEventListener('click', () => {this.delete()})
    } 
    delete(){
        this._element.remove()
        this._element = null
    }
    _setEventListeners() {
        this._likeAddListener();
        this._deleteAddListener();
        this._openPreviewAddListener()
    }  
    getElement() {
        this._photo.src = this.link;
        this._photo.alt = this.name;
        this._text.textContent = this.name;
        this._setEventListeners()

        return this._element
    }
}









