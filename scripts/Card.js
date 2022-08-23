import { previewOpen } from "./index.js"

export default class Card {
    constructor(card, preview, data) { 
        this.card = card 
        this.preview = preview
        this.element = this.card.template.querySelector('.elements__card').cloneNode(true);
        this.photo = this.element.querySelector('.elements__photo');
        this.img = data.link;
        this.text = data.name;
    }
    _preview() {
        this.photo.addEventListener('click', () => {
            this.previewPopUp = previewOpen
            this.previewPopUp(this.text, this.img)
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
    getElement() {
        this.photo = this.element.querySelector('.elements__photo');
        this.photo.src = this.img;
        this.photo.alt = this.text;
        this.element.querySelector('.elements__information-name').textContent = this.text;
        this._like();
        this._delete();
        this._preview()
        

        return this.element
    }
}








