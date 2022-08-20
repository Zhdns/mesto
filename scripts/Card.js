const cardsPreset = [
    {
        name: 'Мертвое море',
        link: './images/places/deadsea.png', 
    },
    {
        name: 'Стамбул',
        link: './images/places/istambul.jpg',
    },
    {
        name: 'Иерусалим',
        link: './images/places/jerusalem.jpg',
    },,
    {
        name: 'Москва',
        link: './images/places/moscow.jpg',
    },
    {
        name: 'Нови Винодольски',
        link: './images/places/noviVinodolski.jpg',
    },
    {
        name: 'Валенсия',
        link: './images/places/valencia.jpg',
    },
];



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

const grid = document.querySelector('.elements')
const card = new Card();
card.render(cardsPreset, grid)
card.renderNewCard(grid)

class Profile {

    static ProfileEditButton = document.querySelector('.profile__info-button');
    static ProfileCloseButton = document.querySelector('#close-name-form');
    static ProfileName = document.querySelector('.profile__info-name');
    static ProfilePofession = document.querySelector('.profile__info-profession');
    static FormName = document.querySelector('#pop-up__name-input');
    static FormProfession = document.querySelector('#pop-up__profession-input');
    static FormProfile = document.forms.profile;
    static ProfilePopUp = document.querySelector('#pop-up-profile-form');

    constructor() {
    }
    _handleOpen() {
        Profile.FormName.value = Profile.ProfileName.textContent;
        Profile.FormProfession.value = Profile.ProfilePofession.textContent;
        new Card().handleOpen(Profile.ProfilePopUp)
    }
    _handleClose() {
        new Card().handleClose(Profile.ProfilePopUp)
    }
    _sendForm = (evt) => {
        evt.preventDefault();
        Profile.ProfileName.textContent = Profile.FormName.value;
        Profile.ProfilePofession.textContent = Profile.FormProfession.value;
        this._handleClose()
    }
    action() {
        Profile.ProfileEditButton.addEventListener('click', () => this._handleOpen());
        Profile.ProfileCloseButton.addEventListener('click',  () => this._handleClose()); 
        Profile.FormProfile.addEventListener('submit', this._sendForm); 
    }
}

const profile = new Profile();
profile.action()


class Valid {


    constructor(config, form) {
        this.formElement = config.form
        this.imputElemnt = config.inputElement
        this.inputError = config.inputError
        this.inputTextError = config.inputTextError
        this.button = config.buttonElement
        this.form = form
    }
    target(evt) {
        const input = evt.target
        this.show(input)
        this.hide(input)
        this.checkInputValidity(input)
        
    }
    input() {
        this.form.addEventListener('input', (evt) => this.target(evt))
        
    }
    show(input) {
        const errorElement= this.form.querySelector(`#${input.id}-error`)
        console.log(errorElement)
        input.classList.add(this.inputError)
        errorElement.textContent = input.validationMessage
        errorElement.classList.add(this.inputTextError)
    }
    hide(input) {
        input.classList.remove(this.inputError)
        input .nextElementSibling.textContent = " "
        input.nextElementSibling.classList.remove(this.inputTextError)
    }
    checkInputValidity(input)  {
        if (input.checkValidity() === true) {
        this.show(input);
        } else {
        this.hide(input);
        }
    };
}

const formObj = {
    formElement: '.pop-up__form-input',
    inputElement: '.pop-up__input-text',
    inputError: 'pop-up__input-text_error',
    inputTextError: 'pop-up__input-error_active',
    buttonElement: '.pop-up__input-button'
}


const form = document.querySelector('.pop-up__form-input')
const val = new Valid(formObj, form)
val.input()

