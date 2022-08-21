
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
    handleOpen(popup) {
        popup.classList.add('pop-up_open');
        document.addEventListener('keydown', this._closeByEscape)
        popup.addEventListener('click', this._closeOnOverlay)
    }
    handleClose(popup) {
        popup.classList.remove('pop-up_open');
        document.removeEventListener('keydown', this._closeByEscape) 
        popup.removeEventListener('click', this._closeOnOverlay)
        new Utils(Card.FormCard, formObj).blockSubmit()
        new Utils(Card.FormCard, formObj).cleanInputs()
        
    }
    _closeByEscape = (e) => {
        if (e.key === 'Escape') {
            this._popUp = document.querySelector('.pop-up_open');
            this.handleClose(this._popUp)
        }
    }
    _closeOnOverlay = (e) => {
        this.popUp = document.querySelector('.pop-up_open');
        if (e.target === this.popUp) {
            this.handleClose(this.popUp);
        }
    }
    _preview() {
        this.photo.addEventListener('click', () => {
            this.handleOpen(Card.PopUpPreview)
            Card.PreviewPhoto.src = this.img
            Card.PreviewPhoto.alt = this.text
            Card.PreviewText.textContent = this.text
        })
        Card.PreviewCloseButton.addEventListener('click', () =>{
            this.handleClose(Card.PopUpPreview)
        })
    }
    _add() {
        Card.NewCardButton.addEventListener('click', () =>{
            Card.CardNameInput.value = ""
            Card.CardLinkInput.value = ""
            this.handleOpen(Card.CardPopUp)
        })
        Card.CardCloseButton.addEventListener('click', () =>{
            this.handleClose(Card.CardPopUp)
        })
    }
    _addCard(container)  {
        this.newCard = {
                name: Card.CardNameInput.value,
                link: Card.CardLinkInput.value,
        }
        container.prepend(this._getElement(this.newCard))
        this.handleClose(Card.CardPopUp)
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









