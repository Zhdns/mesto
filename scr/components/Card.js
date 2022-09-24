export default class Card {
    constructor(card, data, preview) { 
        this.card = card 
        this.element = this.card.template.querySelector('.elements__card').cloneNode(true);
        this.photo = this.element.querySelector('.elements__photo');
        this.text = this.element.querySelector('.elements__information-name')
        this.link = data.link
        this.name = data.name
        this.preview = preview

    }
    _preview() {
        this.photo.addEventListener('click', () => {
            this.preview(this.link, this.name)
        })
    }
    _like() {
        this._buttonLike = this.element.querySelector('.elements__information-button');
        this._buttonLike.addEventListener('click', (e) => {
            e.target.classList.toggle('elements__information-button_active')
        })
    }
    _delete() {
        this._buttonDelete = this.element.querySelector('.elements__delete-button');
        this._buttonDelete.addEventListener('click', (e) =>{
            e.target.closest('.elements__card').remove() 
        })
    } 
    _setEventListeners() {
        this._like();
        this._delete();
        this._preview()
    }  
    getElement() {
        this.photo.src = this.link;
        this.photo.alt = this.name;
        this.text.textContent = this.name;
        this._setEventListeners()

        return this.element
    }
}









