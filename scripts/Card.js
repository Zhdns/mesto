import Utils from "./Utils.js"
import Validation from "./Validation.js"
import { formObj } from "./constants.js"

export default class Card {
    
        static CardAddButton = document.querySelector('.profile__add-button')

    constructor(card, preview) { 
        this.card = card 
        this.preview = preview
    }
    _preview() {
        this.photo.addEventListener('click', () => {
            this.preview.photoInput.src = this.img
            this.preview.photoInput.alt = this.text
            console.log(this.img)
            this.preview.nameInput.textContent = this.text
            new Utils(this.card.form, formObj, this.preview.popUp).handleOpen()
        })
        this.preview.buttonClose.addEventListener('click', () =>{
            new Utils(this.card.form, formObj, this.preview.popUp).handleClose()
        })
    }
    _add() {
        Card.CardAddButton.addEventListener('click', () => {
            this.card.nameInput.value = ""
            this.card.linkInput.value = ""
            new Validation(formObj, this.card.form).checkFormValidity()
            new Utils(this.card.form, formObj, this.card.popUp).cleanInputs()
            new Utils(this.card.form, formObj, this.card.popUp).handleOpen()
        })
        this.card.buttonClose.addEventListener('click', () => {
            new Utils(this.card.form, formObj, this.card.popUp).handleClose()
        })
    }
    _addCard(container)  {
        this.newCard = {
                name: cardNameInput.value,
                link: cardLinkInput.value,
        }
        container.prepend(this._getElement(this.newCard))
        new Utils(this.card.form, formObj, this.card.popUp).handleClose()
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
    _getElement(data) {
        this.element = this.card.template.querySelector('.elements__card').cloneNode(true);
        this.photo = this.element.querySelector('.elements__photo');
        this.img = data.link;
        this.text = data.name;
        this.photo.src = this.img;
        this.element.querySelector('.elements__information-name').alt = this.text;
        this.element.querySelector('.elements__information-name').textContent = this.text;
        this._like();
        this._delete();
        this._add();
        this._preview()

        return this.element
    }
    render(array, container) {
        array.photo.forEach((item) => {
        container.prepend(this._getElement(item))
        })
    }
    renderNewCard(container) {
        this.card.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this._addCard(container)
        })
    }
}









