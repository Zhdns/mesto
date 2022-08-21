
class Card {   

    static Template = document.querySelector('#card-template').content;
    static PopUpPreview = document.querySelector('#popUpImg');
    static PreviewPhoto = document.querySelector('.pop-up__img');
    static PreviewText = document.querySelector('.pop-up__text-img')
    static PreviewCloseButton = document.querySelector('#previewCloseButton')
    static NewCardButton = document.querySelector('.profile__add-button');
    static CardCloseButton = document.querySelector('#close-card-form');
    static CardNameInput = document.querySelector('#cardNameInput');
    static CardLinkInput = document.querySelector('#cardLinkInput');
    static CardPopUp = document.querySelector('#pop-up-card-form');
    static FormCard = document.forms.card;

    constructor() {  
    }
    _preview() {
        this.photo.addEventListener('click', () => {
            new Utils(Card.FormCard, formObj, Card.PopUpPreview).handleOpen()
            Card.PreviewPhoto.src = this.img
            Card.PreviewPhoto.alt = this.text
            Card.PreviewText.textContent = this.text
        })
        Card.PreviewCloseButton.addEventListener('click', () =>{
            new Utils(Card.FormCard, formObj, Card.PopUpPreview).handleClose()
        })
    }
    _add() {
        Card.NewCardButton.addEventListener('click', () =>{
            Card.CardNameInput.value = ""
            Card.CardLinkInput.value = ""
            new Utils(Card.FormCard, formObj, Card.CardPopUp).handleOpen()
            new Utils(Card.FormCard, formObj, Card.CardPopUp).blockSubmit()
            new Utils(Card.FormCard, formObj, Card.CardPopUp).cleanInputs()
        })
        Card.CardCloseButton.addEventListener('click', () =>{
            new Utils(Card.FormCard, formObj, Card.CardPopUp).handleClose()
        })
    }
    _addCard(container)  {
        this.newCard = {
                name: Card.CardNameInput.value,
                link: Card.CardLinkInput.value,
        }
        container.prepend(this._getElement(this.newCard))
        new Utils(Card.FormCard, formObj, Card.CardPopUp).handleClose()
    }
    _like() {
        this._buttonLike = this.card.querySelector('.elements__information-button');
        this._buttonLike.addEventListener('click', (e) => {
            e.target.classList.toggle('elements__information-button_active')
        })
    }
    _delete() {
        this._buttonDelete = this.card.querySelector('.elements__delete-button');
        this._buttonDelete.addEventListener('click', (e) =>{
            e.target.closest('.elements__card').remove() 
        })
    }   
    _getElement(data) {
        this.card = Card.Template.querySelector('.elements__card').cloneNode(true);
        this.photo = this.card.querySelector('.elements__photo');
        this.img = data.link;
        this.text = data.name;
        this.photo.src = this.img;
        this.card.querySelector('.elements__information-name').alt = this.text;
        this.card.querySelector('.elements__information-name').textContent = this.text;
        this._like();
        this._delete();
        this._preview();
        this._add()

        return this.card
    }
    render(array, container) {
        array.forEach((item) => {
        container.prepend(this._getElement(item))
        })
    }
    renderNewCard(container) {
        Card.FormCard.addEventListener('submit', (e) => {
            e.preventDefault()
            this._addCard(container)
        })
    }
}









