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
    _openPreview() {
        this._photo.addEventListener('click', () => {
            this._preview(this.link, this.name)
        })
    }
    _like() {
        this._buttonLike.addEventListener('click', (e) => {
            e.target.classList.toggle('elements__information-button_active')
        })
    }
    _delete() {
        this._buttonDelete.addEventListener('click', (e) =>{
            e.target.closest('.elements__card').remove() 
        })
    } 
    _setEventListeners() {
        this._like();
        this._delete();
        this._openPreview()
    }  
    getElement() {
        this._photo.src = this.link;
        this._text.textContent = this.name;
        this._setEventListeners()

        return this._element
    }
}









