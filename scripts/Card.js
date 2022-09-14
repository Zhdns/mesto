import PopUpPreview from "./PopUpPreview.js";
import PopUpFormCard from "./PopUpFormCard.js";

export default class Card {
    constructor(card, preview, form) { 
        this.card = card 
        this.element = this.card.template.querySelector('.elements__card').cloneNode(true);
        this.photo = this.element.querySelector('.elements__photo');
        this.nameInput = card.nameInput
        this.linkInput = card.linkInput
        this.container = card.container
        this.buttonAdd = card.buttonAdd
        this.buttonClose = card.buttonClose
        this.preview = preview
        this.form = form
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
    getElement(data) {
        this.img = data.link;
        this.text = data.name;
        this.photo.src = this.img;
        this.element.querySelector('.elements__information-name').alt = this.text;
        this.element.querySelector('.elements__information-name').textContent = this.text;
        this._like();
        this._delete();
        new PopUpPreview(this.photo, this.img, this.text, this.preview).openPreview();
        new PopUpFormCard(this.card, this.form).setEventLisners()

        return this.element
    }
    addCard()  {
        this.newCard = {
                name: this.nameInput.value,
                link: this.linkInput.value,
        }

        return this.getElement(this.newCard)
    }
}









