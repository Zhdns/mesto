import Utils from "./Utils.js"
import Validation from "./validation.js"
import {formObj}  from "./constants.js";

export default class Card {
    
        static CardAddButton = document.querySelector('.profile__add-button')

    constructor(card, preview) { 
        this.card = card 
        this.preview = preview
        this.element = this.card.template.querySelector('.elements__card').cloneNode(true);
        this.photo = this.element.querySelector('.elements__photo');
        this.nameInput = card.nameInput
        this.linkInput = card.linkInput
        this.container = card.container
    }
    _preview() {
        this.photo.addEventListener('click', () => {
            new Utils(this.card.form, formObj, this.preview.popUp).handleOpen()
            this.preview.photoInput.src = this.img
            this.preview.photoInput.alt = this.text
            this.preview.nameInput.textContent = this.text
        })
        this.preview.buttonClose.addEventListener('click', () =>{
            new Utils(this.card.form, formObj, this.preview.popUp).handleClose()
        })
    }
    _add() {
        Card.CardAddButton.addEventListener('click', () =>{
            this.card.nameInput.value = ""
            this.card.linkInput.value = ""
            new Validation(formObj, this.card.form).checkFormValidity()
            new Utils(this.card.form, formObj, this.card.popUp).cleanInputs()
            new Utils(this.card.form, formObj, this.card.popUp).handleOpen()
        })
        this.card.buttonClose.addEventListener('click', () =>{
            new Utils(this.card.form, formObj, this.card.popUp).handleClose()
        })
    }
    addCard()  {
        this.newCard = {
                name: this.nameInput.value,
                link: this.linkInput.value,
        }
        

        return this.getElement(this.newCard)
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
        this._preview();
        this._add()

        return this.element
    }
    render(array, container) {
        array.photo.forEach((item) => {
        container.prepend(this.getElement(item))
        })
    }
    renderNewCard() {
        this.card.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this._addCard()
        })
    }
}









